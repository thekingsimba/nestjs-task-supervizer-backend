import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";

@Catch()
export class FallbackException implements ExceptionFilter {


  catch(exception: any, host: ArgumentsHost) {

    console.log("Fallback exception caught", exception)

    const ctx = host.switchToHttp();
    const response = ctx.getRequest()

    return response.status(500).json({
      statusCode: 500,
      source: "Fallback exception",
      message: exception.message ? exception.message : "Unexpected error occurred"
    })

  }
}