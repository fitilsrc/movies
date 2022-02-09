import { Movie } from '@movies/entity';
import { createConnection } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'surus.db.elephantsql.com',
      port: 5432,
      username: 'dpnrmevo',
      password: 'sGZBdOar4H-LCB7SHsZJ1B89ECP9mXzo',
      database: 'dpnrmevo',
      entities: [Movie],
      synchronize: true,
    }),
  },
];