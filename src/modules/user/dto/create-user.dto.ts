import { IsAlphanumeric, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(4, 20)
  @IsAlphanumeric()
  username: string;
}
