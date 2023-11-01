import { User } from "../entities/user.entity";

type CustomUserFields = Exclude<keyof User, 'passwordHash' | 'isActive'>;


export class SignInAuthResponseDto extends User implements Pick<User, CustomUserFields> {
  token: string;
}