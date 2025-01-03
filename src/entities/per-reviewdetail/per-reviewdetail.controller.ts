import { Controller, Post, Body } from '@nestjs/common';
import { PerformanceReviewDetailService } from './per-reviewdetail.service';
import { PerformanceReviewDetail } from 'src/entities/per-reviewdetail.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('PerformanceReviewDetail')
@Controller('performancereviewdetail')
export class PerformanceReviewDetailController {
  constructor(private readonly performanceReviewDetailService: PerformanceReviewDetailService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo detalle de evaluación de desempeño' })
  @ApiResponse({ status: 201, description: 'El detalle de la evaluación ha sido creado.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  async create(@Body() performanceReviewDetail: Partial<PerformanceReviewDetail>): Promise<PerformanceReviewDetail> {
    return this.performanceReviewDetailService.createPerformanceReviewDetail(performanceReviewDetail as PerformanceReviewDetail);
  }
}