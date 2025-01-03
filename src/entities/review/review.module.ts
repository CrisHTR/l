import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewCriteria } from 'src/entities/review.entity';
import { ReviewCriteriaService } from './review.service';
import { ReviewCriteriaController } from './review.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewCriteria])],
  providers: [ReviewCriteriaService],
  controllers: [ReviewCriteriaController],
})
export class ReviewCriteriaModule {}