import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerformanceReviewModule } from './core/per-review/per-review.module';
import { ReviewCriteriaModule } from './core/review/review.module';
import { PerformanceReviewDetailModule } from './core/per-reviewdetail/per-reviewdetail.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '168.232.165.119',
      port: 5432,
      username: 'develop',
      password: 'develop',
      database: 'rl_dev',
      schema: 'performances',
      autoLoadEntities: true,
      synchronize: false,
    }),
    PerformanceReviewModule,
    ReviewCriteriaModule,
    PerformanceReviewDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}