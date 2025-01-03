import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewCriteria } from 'src/entities/review.entity';

@Injectable()
export class ReviewCriteriaService {
  constructor(
    @InjectRepository(ReviewCriteria)
    private reviewCriteriaRepository: Repository<ReviewCriteria>,
  ) {}

  async createReviewCriteria(reviewCriteria: ReviewCriteria): Promise<ReviewCriteria> {
    return this.reviewCriteriaRepository.save(reviewCriteria);
  }
}