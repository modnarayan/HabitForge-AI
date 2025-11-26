import { Controller, Get } from '@nestjs/common';
import { HabitsService } from './habits.service';

@Controller()
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  @Get()
  getHello(): string {
    return this.habitsService.getHello();
  }
}
