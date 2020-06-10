import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../account/layout.component';
import { ChatComponent } from './chat.component';
import { ChatDisplayComponent } from './chat-display/chat-display.component';

const routes: Routes = [
    {
      path: '', component: ChatComponent,
    },
    {
      path: 'chat',
      component: ChatDisplayComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatRoutingModule { }
