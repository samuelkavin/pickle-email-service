import { Test, TestingModule } from '@nestjs/testing';
import { EmailModule } from '../email/email.module';
import { UserDto } from './dto/user.dto';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  const mockedUserService = {
    registerUserInquiry: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EmailModule],
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockedUserService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('registerUserInquiry()', () => {
    it('Should return success message when register successfully', async () => {
      // prepare
      const mockBody: UserDto = {
        name: 'John Doe',
        message: 'Example inquiry message',
        email: 'example@example.com',
        mobile: '+60121234567',
      };

      mockedUserService.registerUserInquiry.mockImplementation(() => ({
        ...mockBody,
      }));

      // Action
      const result = await controller.registerUserInquiry(mockBody);

      // Assert
      expect(mockedUserService.registerUserInquiry).toBeCalled();
    });
  });
});
