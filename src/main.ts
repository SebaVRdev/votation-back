import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { envs } from './config/envs';

async function bootstrap() {
  const logger = new Logger('Main API')
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: "*"});
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );
  app.enableVersioning({ type: VersioningType.URI })

  const PORT = envs.port ?? 3000
  app.setGlobalPrefix('api');
  await app.listen(PORT);
  logger.log("API corriendo en el puerto: " + PORT)
}
bootstrap();
