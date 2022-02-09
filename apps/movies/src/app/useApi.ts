import { IMovie } from "@movies/components"
import { useCallback, useEffect, useState } from "react"

const useApi = () => {

    let month = ['янв', 'фев', 'мар', 'апр', 'май', 'июня', 'июля', 'авг', 'сен', 'окт', 'ноя', 'дек']

    const formatDate = (date: string) => {
        let result = new Date(date)
        return `${result.getDate()} ${month[result.getMonth()]} ${result.getFullYear()}`
    }

    const fetchMovies = async() => {
        let response = await fetch('/api/movie')
        let movies = await response.json()
        return Promise.resolve(movies)
    }

    const postMovie = async(movie: IMovie) => {
        
        try {
            const response = await fetch('/api/movie', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(movie)
            })
            return true
        } catch (error) {
            return console.log('we got an error: ', error)
        }
    }

    const putMovie = async(movie: IMovie) => {
        
        try {
            const response = await fetch('/api/movie', {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(movie)
            })
            return true
        } catch (error) {
            return console.log('we got an error: ', error)
        }
    }

    const useAsync = <T, E = string>(
        asyncFunction: () => Promise<T>,
        immediate = true
    ) => {
        const [status, setStatus] = useState<
            "idle" | "pending" | "success" | "error"
        >("idle");
        const [value, setValue] = useState<T | null>(null);
        const [error, setError] = useState<E | null>(null);
        // The execute function wraps asyncFunction and
        // handles setting state for pending, value, and error.
        // useCallback ensures the below useEffect is not called
        // on every render, but only if asyncFunction changes.
        const execute = useCallback(() => {
            setStatus("pending");
            setValue(null);
            setError(null);
            return asyncFunction()
            .then((response: any) => {
                setValue(response);
                setStatus("success");
            })
            .catch((error: any) => {
                setError(error);
                setStatus("error");
            });
        }, [asyncFunction]);
        // Call execute if we want to fire it right away.
        // Otherwise execute can be called later, such as
        // in an onClick handler.
        useEffect(() => {
            if (immediate) {
            execute();
            }
        }, [execute, immediate]);
        return { execute, status, value, error };
    };

    return {
        useAsync,
        formatDate,
        fetchMovies,
        postMovie,
        putMovie
    }
}

export default useApi