import { Test, TestingModule } from '@nestjs/testing';
import { ReviewCriteriaService } from './review.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ReviewCriteria } from 'src/entities/review.entity';

describe('ReviewCriteriaService', () => {
  let service: ReviewCriteriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewCriteriaService,
        {
          provide: getRepositoryToken(ReviewCriteria),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ReviewCriteriaService>(ReviewCriteriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});