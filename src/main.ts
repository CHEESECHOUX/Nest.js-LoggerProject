import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';
import { HttpLoggingInterceptor } from '@src/common/http-logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new HttpLoggingInterceptor());

  await app.listen(3001);
}
bootstrap();
