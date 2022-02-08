import { Module } from '@nestjs/common';
import { DBModule } from '../db/db.module';
import { MovieController } from './movie.controller';
import { movieProviders } from './movie.providers';
import { MovieService } from './movie.service';

@Module({
  imports:[DBModule],
  controllers: [MovieController],
  providers: [
    ...movieProviders,
    MovieService
  ],
})
export class MovieModule {}
