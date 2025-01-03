import { Test, TestingModule } from '@nestjs/testing';
import { ReviewCriteriaController } from './review.controller';
import { ReviewCriteriaService } from './review.service';

describe('ReviewCriteriaController', () => {
  let controller: ReviewCriteriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewCriteriaController],
      providers: [ReviewCriteriaService],
    }).compile();

    controller = module.get<ReviewCriteriaController>(ReviewCriteriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});