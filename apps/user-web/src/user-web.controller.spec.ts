import { AppConfigModule } from '@app/app-config';
import { Test, TestingModule } from '@nestjs/testing';
import { UserWebController } from './user-web.controller';
import { UserWebService } from './user-web.service';

describe('UserWebController', () => {
  let userWebController: UserWebController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppConfigModule],
      controllers: [UserWebController],
      providers: [UserWebService],
    }).compile();

    userWebController = app.get<UserWebController>(UserWebController);
  });

  describe('index', () => {
    it('should return something', () => {
      expect(userWebController.index()).toBeDefined();
    });
  });
});
