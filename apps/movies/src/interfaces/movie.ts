import { IMovie } from "@movies/components";

export interface IMoviesActions {
    type: 'get_movies';
    payload: IMovie[];
}

export interface IPaginationActions {
    type: 'set_page';
    payload: number;
}

export type StateActions = IMoviesActions | IPaginationActions;