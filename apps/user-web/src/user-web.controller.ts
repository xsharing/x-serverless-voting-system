import { Controller, Get, Render } from '@nestjs/common';
import { UserWebService } from './user-web.service';

@Controller()
export class UserWebController {
  constructor(private readonly userWebService: UserWebService) {}

  @Get()
  @Render('Index')
  public index() {
    console.debug('index', this.userWebService.getDbAdapterMode());
    // initial props
    return {
      title: 'Next with Nest',
      db_adapter_mode: this.userWebService.getDbAdapterMode(),
    };
  }

  @Get('about')
  @Render('About')
  public about() {
    console.debug('about');
    // initial props
    return {
      title: 'Next with Nest',
    };
  }

  @Get('campaign')
  @Render('CampaignDetail')
  public campaign() {
    console.debug('campaign');
    // initial props
    return {
      title: 'Next with Nest',
    };
  }
}
