import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class ToNumberPipe implements PipeTransform<String> {

  transform(value: string, metadata: ArgumentMetadata) {
    const newValue = Number(value);

    if (isNaN(newValue)) {
      throw new BadRequestException("The value sent is not a number ")
    }

    return newValue;
  }

}