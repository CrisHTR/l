import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'performancereviewdetail' })
export class PerformanceReviewDetail {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID único del detalle de la evaluación de desempeño' })
  id: number;

  @Column({ name: 'performance_review_id', type: 'int' })
  @ApiProperty({ description: 'ID de la evaluación de desempeño' })
  performanceReviewId: number;

  @Column({ name: 'criteria_id', type: 'int' })
  @ApiProperty({ description: 'ID del criterio de evaluación' })
  criteriaId: number;

  @Column({ name: 'rating', type: 'numeric', precision: 3, scale: 2 })
  @ApiProperty({ description: 'Calificación del criterio' })
  rating: number;

  @Column({ name: 'comments', type: 'text' })
  @ApiProperty({ description: 'Comentarios' })
  comments: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @ApiProperty({ description: 'Fecha de creación' })
  createdAt: Date;
}