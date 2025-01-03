import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceReviewDetailController } from './per-reviewdetail.controller';
import { PerformanceReviewDetailService } from './per-reviewdetail.service';

describe('PerformanceReviewDetailController', () => {
  let controller: PerformanceReviewDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerformanceReviewDetailController],
      providers: [PerformanceReviewDetailService],
    }).compile();

    controller = module.get<PerformanceReviewDetailController>(PerformanceReviewDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});