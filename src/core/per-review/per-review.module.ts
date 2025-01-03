import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerformanceReview } from 'src/entities/per-review.entity';
import { PerformanceReviewService } from './per-review.service';
import { PerformanceReviewController } from './per-review.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PerformanceReview])],
  providers: [PerformanceReviewService],
  controllers: [PerformanceReviewController],
})
export class PerformanceReviewModule {}