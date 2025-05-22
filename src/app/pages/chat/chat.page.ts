import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ChatService } from '../../services/chat.service';
import { Message } from '../../model/message.model';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonFooter, IonContent, IonInput, IonButton, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonMenuButton,
    IonButtons,
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatInputModule,
    IonTitle,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    IonContent
  ],
})
export class ChatPage implements OnInit {
  messages: Message[] = [];
  input = '';
  sender: 'yo' | 'john' = 'yo';

  constructor(private chatService: ChatService) {
    this.messages = this.chatService.getMessages();
  }

  ngOnInit() {}

  sendMessage() {
    if (this.input.trim()) {
      this.chatService.addMessage({
        text: this.input,
        sender: this.sender,
        timestamp: new Date(),
      });
      this.input = '';
    }
  }

  toggleSender(value: 'yo' | 'john') {
    this.sender = value;
  }
}
