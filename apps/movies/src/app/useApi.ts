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

    return {
        formatDate,
        fetchMovies
    }
}

export default useApi