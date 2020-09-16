import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/core';
import { Booking } from 'src/app/core/state/booking/booking.model';
import { UserService } from 'src/app/core/state/user/user.service';

@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.css']
})
export class ChatPreviewComponent implements OnInit {

  @Input() booking: Booking;
  userDetail: Profile

  constructor(private userService: UserService) {}

  ngOnInit(){
  }

}
