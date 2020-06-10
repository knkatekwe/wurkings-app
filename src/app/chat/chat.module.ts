import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '../shared';
import { ChatComponent } from './chat.component';
import { ChatDisplayComponent } from './chat-display/chat-display.component';

@NgModule({
  declarations: [ChatComponent, ChatDisplayComponent],
  imports: [
    ChatRoutingModule,
    SharedModule
  ]
})
export class ChatModule { }
