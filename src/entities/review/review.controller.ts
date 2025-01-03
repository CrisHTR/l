import { Controller, Post, Body } from '@nestjs/common';
import { ReviewCriteriaService } from './review.service';
import { ReviewCriteria } from 'src/entities/review.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('ReviewCriteria')
@Controller('reviewcriteria')
export class ReviewCriteriaController {
  constructor(private readonly reviewCriteriaService: ReviewCriteriaService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo criterio de evaluación' })
  @ApiResponse({ status: 201, description: 'El criterio ha sido creado.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  async create(@Body() reviewCriteria: Partial<ReviewCriteria>): Promise<ReviewCriteria> {
    return this.reviewCriteriaService.createReviewCriteria(reviewCriteria as ReviewCriteria);
  }
}