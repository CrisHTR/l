import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceReviewService } from './per-review.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PerformanceReview } from 'src/entities/per-review.entity';

describe('PerformanceReviewService', () => {
  let service: PerformanceReviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PerformanceReviewService,
        {
          provide: getRepositoryToken(PerformanceReview),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<PerformanceReviewService>(PerformanceReviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});