import { Controller, Post, Patch, Body, Param } from '@nestjs/common';
import { PerformanceReviewService } from './per-review.service';
import { PerformanceReview } from 'src/entities/per-review.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('PerformanceReview')
@Controller('performancereview')
export class PerformanceReviewController {
  constructor(private readonly performanceReviewService: PerformanceReviewService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva evaluación de desempeño' })
  @ApiResponse({ status: 201, description: 'La evaluación ha sido creada.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  async create(@Body() performanceReview: Partial<PerformanceReview>): Promise<PerformanceReview> {
    return this.performanceReviewService.createPerformanceReview(performanceReview as PerformanceReview);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una evaluación de desempeño existente' })
  @ApiResponse({ status: 200, description: 'La evaluación ha sido actualizada.' })
  @ApiResponse({ status: 404, description: 'Evaluación no encontrada.' })
  async update(@Param('id') id: number, @Body() performanceReview: Partial<PerformanceReview>): Promise<PerformanceReview> {
    return this.performanceReviewService.updatePerformanceReview(id, performanceReview);
  }
}