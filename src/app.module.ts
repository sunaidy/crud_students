import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { EstudianteController } from './estudiante/estudiante.controller'; 
import { EstudianteService } from './estudiante/estudiante.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { logger } from '../middleware/logger.middleware';
@Module({
  imports: [EstudianteModule],
  controllers: [EstudianteController],
  providers: [EstudianteService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes(EstudianteController);
  }
}
