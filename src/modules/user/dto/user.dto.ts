import { ApiProperty } from '@nestjs/swagger';
import { User } from '../type/user.type';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
export class UserDto implements User {
  @ApiProperty({
    example: 'John Doe',
    description: 'User full name',
    format: 'string',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Example inquiry message',
    description: 'User inquiry message',
    format: 'string',
  })
  @IsNotEmpty()
  message: string;

  @ApiProperty({
    example: '+60121234567',
    description: 'User phone number',
    format: 'string',
  })
  @IsNotEmpty()
  mobile: string;

  @ApiProperty({
    example: 'example@gmail.com',
    description: 'User email',
    uniqueItems: true,
  })
  @MinLength(5)
  @MaxLength(255)
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
