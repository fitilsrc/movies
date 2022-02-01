import { IState } from "..";
import { StateActions } from "../../interfaces/movie";

const moviesReduser = (state: IState, action:StateActions) => {
    switch (action.type) {
        case 'get_movies':
            return { ...state, movies: action.payload }
        case 'set_page':
            return { ...state, page: action.payload}
    }
}

export default moviesReduser