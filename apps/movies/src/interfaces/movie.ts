export default interface IMovie {
    id: string,
    date: string,
    image: string,
    name: string,
    rating: number
}

export interface IMoviesActions {
    type: 'get_movies';
    payload: IMovie[];
}

export interface IPaginationActions {
    type: 'set_page';
    payload: number;
}

export type StateActions = IMoviesActions | IPaginationActions;