import { Test, TestingModule } from '@nestjs/testing';
import { UserWebController } from './user-web.controller';
import { UserWebService } from './user-web.service';

describe('UserWebController', () => {
  let userWebController: UserWebController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserWebController],
      providers: [UserWebService],
    }).compile();

    userWebController = app.get<UserWebController>(UserWebController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userWebController.getHello()).toBe('Hello World!');
    });
  });
});
