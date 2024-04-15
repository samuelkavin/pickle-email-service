import * as nodemailer from 'nodemailer';
import { User } from '../user/type/user.type';

export const sendEmail = async (user: User) => {
  const { email, message, name, mobile } = user;
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'samuelkavin-123456@outlook.com',
      pass: 'Samuel!@#',
    },
  });

  const options = {
    from: 'samuelkavin-123456@outlook.com',
    to: `${email}`,
    subject: 'Automated Email',
    text: `
      Name: ${name}
      Message: ${message}
      Email: ${email}
      Mobile: ${mobile}

      Thank you!
    `,
  };

  await transporter.sendMail(options, function (error, info) {
    try {
      console.info(info);
      return info;
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
};
