import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { ValidationException } from './ValidationException';

@Catch(ValidationException)
export class ValidationErrorFilter implements ExceptionFilter {

  catch(exception: ValidationException, host: ArgumentsHost): any {

    console.log("filter called !")

    const ctx = host.switchToHttp(),
      response = ctx.getResponse();

    return response.status(400).json({
      statusCode: 400,
      createdBy: "ValidationFilter",
      validationErrors: exception.validationErrors
    });

  }

}