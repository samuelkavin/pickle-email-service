import { Test, TestingModule } from '@nestjs/testing';
import { EmailService } from '../email/email.service';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, EmailService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('registerUser()', () => {
    it('Should return success message when success', async () => {
      const mockBody: UserDto = {
        name: 'John Doe',
        message: 'Example inquiry message',
        email: 'example@example.com',
        mobile: '+60121234567',
      };

      const result = await service.registerUserInquiry(mockBody);

      await expect(result.email).toEqual(`${mockBody.email}`);
    });

    it('Should throw validation error when passing empty data', async () => {
      const mockBody: UserDto = {
        name: 'John Doe',
        message: 'Example inquiry message',
        email: '',
        mobile: '+60121234567',
      };

      service
        .registerUserInquiry(mockBody)
        .then((data) => expect(data).rejects.toBeTruthy());
    });
  });
});
