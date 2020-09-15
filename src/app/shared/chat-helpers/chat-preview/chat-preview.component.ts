import { Component, OnInit, Input } from '@angular/core';
import { Booking } from 'src/app/core/state/booking/booking.model';

@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.css']
})
export class ChatPreviewComponent implements OnInit {

  @Input() booking: Booking;

  constructor() { }

  ngOnInit(): void {
  }

}
