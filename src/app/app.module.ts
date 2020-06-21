import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
// import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AccountModule } from './account/account.module';
import { ChatModule } from './chat/chat.module';
import { ProfileModule } from './profile/profile.module';
import { NotificationsModule } from './notifications/notifications.module';
import { RentalsComponent } from './rentals/rentals.component';
import { RentalsModule } from './rentals/rentals.module';
import { RequestsComponent } from './requests/requests.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AccountModule,
    AppRoutingModule,
    ChatModule,
    ProfileModule,
    NotificationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

