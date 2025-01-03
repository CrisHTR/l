import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PerformanceReviewDetail } from 'src/entities/per-reviewdetail.entity';
import { PerformanceReview } from 'src/entities/per-review.entity';
import { ReviewCriteria } from 'src/entities/review.entity';

@Injectable()
export class PerformanceReviewDetailService {
  constructor(
    @InjectRepository(PerformanceReviewDetail)
    private performanceReviewDetailRepository: Repository<PerformanceReviewDetail>,
    @InjectRepository(PerformanceReview)
    private performanceReviewRepository: Repository<PerformanceReview>,
    @InjectRepository(ReviewCriteria)
    private reviewCriteriaRepository: Repository<ReviewCriteria>,
  ) {}

  async createPerformanceReviewDetail(performanceReviewDetail: PerformanceReviewDetail): Promise<PerformanceReviewDetail> {
    const performanceReview = await this.performanceReviewRepository.findOneBy({ id: performanceReviewDetail.performanceReviewId });
    if (!performanceReview) {
      throw new NotFoundException(`PerformanceReview with ID ${performanceReviewDetail.performanceReviewId} not found`);
    }

    const reviewCriteria = await this.reviewCriteriaRepository.findOneBy({ id: performanceReviewDetail.criteriaId });
    if (!reviewCriteria) {
      throw new NotFoundException(`ReviewCriteria with ID ${performanceReviewDetail.criteriaId} not found`);
    }

    return this.performanceReviewDetailRepository.save(performanceReviewDetail);
  }
}