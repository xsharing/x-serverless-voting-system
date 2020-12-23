import { Test, TestingModule } from '@nestjs/testing';
import { AdminWebController } from './admin-web.controller';
import { AdminWebService } from './admin-web.service';

describe('AdminWebController', () => {
  let adminWebController: AdminWebController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AdminWebController],
      providers: [AdminWebService],
    }).compile();

    adminWebController = app.get<AdminWebController>(AdminWebController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(adminWebController.getHello()).toBe('Hello World!');
    });
  });
});
