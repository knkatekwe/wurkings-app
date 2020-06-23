import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/core';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {

  @Input() message: Message;

  isCurrentUser: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
