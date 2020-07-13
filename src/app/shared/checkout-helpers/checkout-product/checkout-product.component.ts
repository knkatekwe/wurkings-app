import { Component, OnInit, Input } from '@angular/core';
import { Listing, Booking } from 'src/app/core';

@Component({
  selector: 'app-checkout-product',
  templateUrl: './checkout-product.component.html',
  })
export class CheckoutProductComponent implements OnInit {

  @Input() booking: Booking;

  ngOnInit() {
  }

}
