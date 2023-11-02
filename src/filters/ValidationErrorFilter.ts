import { ArgumentsHost, Catch } from "@nestjs/common";
import { ExceptionFilter } from "@nestjs/common/interfaces/exceptions";
import { ValidationError } from "class-validator";
import { ValidationException } from "./ValidationException";

@Catch(ValidationException)
export class ValidationErrorFilter implements ExceptionFilter {

  catch(exception: ValidationException, host: ArgumentsHost) {

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    return response.status(400).json({
      statusCode: 400,
      source: "ValidationErrorFilter",
      message: exception.validationErrors
    })

  }

}


