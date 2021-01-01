import { AppConfigModule } from '@app/app-config/app-config.module';
import { Test, TestingModule } from '@nestjs/testing';
import { AdminWebController } from './admin-web.controller';
import { AdminWebService } from './admin-web.service';

describe('AdminWebController', () => {
  let adminWebController: AdminWebController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppConfigModule],
      controllers: [AdminWebController],
      providers: [AdminWebService],
    }).compile();

    adminWebController = app.get<AdminWebController>(AdminWebController);
  });

  describe('index', () => {
    it('should return something', () => {
      expect(adminWebController.index()).toBeDefined();
    });
  });
});
