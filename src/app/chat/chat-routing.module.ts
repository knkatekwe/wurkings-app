import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../account/layout.component';
import { ChatListComponent } from './chat-list.component';
import { ChatComponent } from './chat.component';

const routes: Routes = [
    {
      path: '', component: ChatListComponent,
    },
    {
      path: 'chat',
      component: ChatComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatRoutingModule { }
