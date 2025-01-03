import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceReviewDetailService } from './per-reviewdetail.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PerformanceReviewDetail } from 'src/entities/per-reviewdetail.entity';
import { PerformanceReview } from 'src/entities/per-review.entity';
import { ReviewCriteria } from 'src/entities/review.entity';

describe('PerformanceReviewDetailService', () => {
  let service: PerformanceReviewDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PerformanceReviewDetailService,
        {
          provide: getRepositoryToken(PerformanceReviewDetail),
          useValue: {},
        },
        {
          provide: getRepositoryToken(PerformanceReview),
          useValue: {},
        },
        {
          provide: getRepositoryToken(ReviewCriteria),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<PerformanceReviewDetailService>(PerformanceReviewDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});