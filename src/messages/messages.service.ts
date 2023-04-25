import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

//  use @Injectable() decorator to register this class with DI Container
//  all classes must be registered to the DI Container except controller file - messages.controller.ts. Because controller is only consuming classses, Nest is going to try to create an instance of our controller for us so we do not have to register controller with DI Container
@Injectable()
export class MessagesService {

  /*
  messagesRepo: MessagesRepository;
  constructor(messagesRepo: MessagesRepository) {
    this.messagesRepo = messagesRepo;
  }
  */
  //  use typescript syntax to condense all these lines of code, it is 100% equivalent the above code
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
