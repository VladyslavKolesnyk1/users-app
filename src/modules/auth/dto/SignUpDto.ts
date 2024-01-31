import {
  IsAlphanumeric,
  IsEmail,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class SignUpDto {
  @IsString()
  @Length(4, 20)
  @IsAlphanumeric()
  username: string;

  @IsString()
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,40}$/, {
    message:
      'Password must be 8-40 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.',
  })
  password: string;

  @IsEmail()
  email: string;
}
