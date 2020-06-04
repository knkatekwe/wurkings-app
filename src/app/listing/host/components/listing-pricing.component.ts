import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-pricing',
  templateUrl: './listing-pricing.component.html',
  styleUrls: ['./listing-pricing.component.css']
})
export class ListingPricingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextPage(){
    // nagivate to get started page
    this.router.navigate(['/listing/become-a-host/conditions']);
  }

}
