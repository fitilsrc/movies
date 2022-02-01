import IMovie from "../interfaces/movie"

const useApi = () => {

    let month = ['янв', 'фев', 'мар', 'апр', 'май', 'июня', 'июля', 'авг', 'сен', 'окт', 'ноя', 'дек']

    const formatDate = (date: string) => {
        let result = new Date(date)
        return `${result.getDate()} ${month[result.getMonth()]} ${result.getFullYear()}`
    }

    const fetchMovies = async() => {
        let response = await fetch('/api')
        let movies = await response.json()
        return Promise.resolve(movies)
    }

    const postMovie = async(movie: IMovie) => {
        
        try {
            const response = await fetch('/api', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(movie)
            })
        } catch (error) {
            return console.log('we got an error: ', error)
        }
    }

    return {
        formatDate,
        fetchMovies,
        postMovie
    }
}

export default useApi