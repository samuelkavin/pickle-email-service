import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { sendEmail } from './email.config';
import { User } from '../user/type/user.type';

@Injectable()
export class EmailService {
  async sendEmailCopy(user: User) {
    try {
      await sendEmail(user);
    } catch (error) {
      new HttpException('Something went wrong!', HttpStatus.BAD_REQUEST);
    }
    return user.email;
  }
}
