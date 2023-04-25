import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

//  use @Injectable() decorator to register this class with DI Container
//  all classes must be registered to the DI Container except controller file - messages.controller.ts. Because controller is only consuming classses, Nest is going to try to create an instance of our controller for us so we do not have to register controller with DI Container
@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
