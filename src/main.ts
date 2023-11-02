import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationError, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/HttpExceptionFilter.filter';
import { FallbackException } from './filters/FallbackException.filter';
import { ValidationErrorFilter } from './filters/ValidationErrorFilter';
import { ValidationException } from './filters/ValidationException';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");

  // app.useGlobalFilters(
  //   //new HttpExceptionFilter(),
  //   // new FallbackException(),
  //   // new ValidationErrorFilter()
  // );

  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (errors: ValidationError[]) => {

      const messages = errors.map(error => `${error.property} has wrong value ${error.value},
                ${Object.values(error.constraints).join(', ')} `
      );

      return new ValidationException(messages);
    }
  }

  ));


  await app.listen(3000);
}
bootstrap();
