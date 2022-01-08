import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TripController } from './trip.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, TripController],
  providers: [AppService],
})
export class AppModule {}
