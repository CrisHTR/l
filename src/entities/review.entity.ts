import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'reviewcriteria' })
export class ReviewCriteria {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID único del criterio de evaluación' })
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 100 })
  @ApiProperty({ description: 'Nombre del criterio' })
  name: string;

  @Column({ name: 'description', type: 'text' })
  @ApiProperty({ description: 'Descripción del criterio' })
  description: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @ApiProperty({ description: 'Fecha de creación' })
  createdAt: Date;
}