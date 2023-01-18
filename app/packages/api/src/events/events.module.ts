import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { UserModule, UserService } from 'src/user';

@Module({
  imports: [UserModule],
  providers: [EventsGateway, UserService],
})
export class EventsModule {}
