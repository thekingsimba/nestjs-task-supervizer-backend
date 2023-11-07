import { BadRequestException } from '@nestjs/common';

interface Error {
    name: string;
    message: string;
    stack?: string;
}

export class ValidationException extends BadRequestException {

  constructor(public validationErrors: string[]) {
    super();
  }

}