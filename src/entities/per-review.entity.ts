import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'performancereview' })
export class PerformanceReview {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID único de la evaluación de desempeño' })
  id: number;

  @Column({ name: 'reviewee_id', type: 'int' })
  @ApiProperty({ description: 'ID del evaluado' })
  revieweeId: number;

  @Column({ name: 'reviewer_id', type: 'int' })
  @ApiProperty({ description: 'ID del evaluador' })
  reviewerId: number;

  @Column({ name: 'period', type: 'varchar', length: 50 })
  @ApiProperty({ description: 'Periodo de la evaluación' })
  period: string;

  @Column({ name: 'overall_rating', type: 'numeric', precision: 3, scale: 2 })
  @ApiProperty({ description: 'Calificación general' })
  overallRating: number;

  @Column({ name: 'comments', type: 'text' })
  @ApiProperty({ description: 'Comentarios' })
  comments: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @ApiProperty({ description: 'Fecha de creación' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @ApiProperty({ description: 'Fecha de última actualización' })
  updatedAt: Date;
}