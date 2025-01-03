import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PerformanceReview } from 'src/entities/per-review.entity';

@Injectable()
export class PerformanceReviewService {
  constructor(
    @InjectRepository(PerformanceReview)
    private performanceReviewRepository: Repository<PerformanceReview>,
  ) {}

  async createPerformanceReview(performanceReview: PerformanceReview): Promise<PerformanceReview> {
    return this.performanceReviewRepository.save(performanceReview);
  }

  async updatePerformanceReview(id: number, performanceReview: Partial<PerformanceReview>): Promise<PerformanceReview> {
    await this.performanceReviewRepository.update(id, performanceReview);
    return this.performanceReviewRepository.findOneBy({ id });
  }
}