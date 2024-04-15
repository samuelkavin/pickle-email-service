import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private emailService: EmailService) {}

  async registerUserInquiry(user: UserDto): Promise<{ email: string }> {
    const { email } = user;
    let result: string;

    if (!email) {
      throw new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
    }

    if (email) {
      result = await this.emailService.sendEmailCopy(user);
    }

    return {
      email: result,
    };
  }
}
