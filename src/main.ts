import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationError, ValidationPipe, ExceptionFilter } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/HttpExceptionFilter.filter';
import { FallbackException } from './filters/FallbackException.filter';
import { ValidationException } from './filters/ValidationException';
import { ValidationErrorFilter } from './filters/ValidationErrorFilter.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");

  app.useGlobalFilters(
    // writing some custom filter here just to customize error message
    new FallbackException(), // optional: just did it to show how to create custom filter
    new HttpExceptionFilter(), // optional: Nest has a built-in ExceptionFilter for that 
    new ValidationErrorFilter()
  );

  app.useGlobalPipes(new ValidationPipe(
    {
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
