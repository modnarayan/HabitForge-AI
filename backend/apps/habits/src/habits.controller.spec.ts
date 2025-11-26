import { Test, TestingModule } from '@nestjs/testing';
import { HabitsController } from './habits.controller';
import { HabitsService } from './habits.service';

describe('HabitsController', () => {
  let habitsController: HabitsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HabitsController],
      providers: [HabitsService],
    }).compile();

    habitsController = app.get<HabitsController>(HabitsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(habitsController.getHello()).toBe('Hello World!');
    });
  });
});
