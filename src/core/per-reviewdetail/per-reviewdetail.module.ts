import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerformanceReviewDetail } from 'src/entities/per-reviewdetail.entity';
import { PerformanceReviewDetailService } from './per-reviewdetail.service';
import { PerformanceReviewDetailController } from './per-reviewdetail.controller';
import { PerformanceReview } from 'src/entities/per-review.entity';
import { ReviewCriteria } from 'src/entities/review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PerformanceReviewDetail, PerformanceReview, ReviewCriteria])],
  providers: [PerformanceReviewDetailService],
  controllers: [PerformanceReviewDetailController],
})
export class PerformanceReviewDetailModule {}