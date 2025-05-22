import { Injectable } from '@angular/core';
import { Message } from '../model/message.model';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private messages: Message[] = [
    { text: '¡Hola!', sender: 'john', timestamp: new Date() },
    { text: 'Hola John, ¿cómo estás?', sender: 'yo', timestamp: new Date() }
  ];

  getMessages(): Message[] {
    return this.messages;
  }

  addMessage(msg: Message) {
    this.messages.push(msg);
  }
}