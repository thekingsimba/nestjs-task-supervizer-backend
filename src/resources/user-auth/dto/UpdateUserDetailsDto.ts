import { PartialType } from "@nestjs/mapped-types";
import { SignUpAuthDto } from "./SignUpAuthDto";

export class UpdateUserDetailsDto extends PartialType(SignUpAuthDto) { }
