import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-conditions',
  templateUrl: './listing-conditions.component.html',
  styleUrls: ['./listing-conditions.component.css']
})
export class ListingConditionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextPage(){
    // nagivate to get started page
    this.router.navigate(['/listing/become-a-host/']);
  }

}
