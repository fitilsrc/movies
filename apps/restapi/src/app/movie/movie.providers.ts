import { Movie } from '@movies/entity';
import { Connection } from 'typeorm';

export const movieProviders = [
  {
    provide: 'MOVIE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Movie),
    inject: ['DATABASE_CONNECTION'],
  },
];