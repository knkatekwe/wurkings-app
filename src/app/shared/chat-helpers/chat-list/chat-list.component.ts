import { Component, OnInit, Input } from '@angular/core';
import { BookingListConfig, BookingService, Booking } from 'src/app/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
  }

  @Input()
  set config(config: BookingListConfig) {
    if (config) {
      this.query = config;
      // this.currentPage = 1;
      this.runQuery();
    }
  }

  query: BookingListConfig;
  results: Booking[];
  loading = false;

  runQuery() {
    this.loading = true;
    this.results = [];

    // Create limit and offset filter (if necessary)
    // if (this.limit) {
    //   this.query.filters.limit = this.limit;
    //   this.query.filters.offset =  (this.limit * (this.currentPage - 1));
    // }

    this.bookingService.query(this.query)
    .subscribe(data => {
      this.loading = false;
      this.results = data;
      console.log('tasvika nepa rema bookings query!!!!!!!')
      console.log(this.results)

      // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
      // this.totalPages = Array.from(new Array(Math.ceil(data.bookingsCount / this.limit)), (val, index) => index + 1);
    });
  }


}
