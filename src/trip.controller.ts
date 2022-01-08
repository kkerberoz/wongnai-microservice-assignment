import { HttpService } from '@nestjs/axios';
import { Controller, Query, Get } from '@nestjs/common';
import { map } from 'rxjs';

@Controller('api')
export class TripController {
  constructor(private httpService: HttpService) {}

  @Get('trips')
  async getTripByQueryParam(@Query() query: { keyword: string }) {
    return await this.httpService.get('http://localhost:9000/trips').pipe(
      map((res) => {
        const trips = res.data;
        const fillterTrip = trips.filter(
          (trip) =>
            trip.title.includes(query.keyword) ||
            trip.description.includes(query.keyword) ||
            trip.tags.includes(query.keyword),
        );
        return fillterTrip;
      }),
    );
  }
}
