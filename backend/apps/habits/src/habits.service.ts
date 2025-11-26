import { Injectable } from '@nestjs/common';

@Injectable()
export class HabitsService {
  getHello(): string {
    return 'Hello World!';
  }
}
