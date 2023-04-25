import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  //  add all classes just marked as Injectable to the model decorator of providers so that DI Container manages them
  //  other word, this would be things that can be used as dependencies for other classes so that DI Container will manage them
  //  Next is going to automatically create DI Container, DI Container will create an instance of controller and maintain all dependencies for us
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
