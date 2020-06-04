import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-pictures',
  templateUrl: './listing-pictures.component.html',
  styleUrls: ['./listing-pictures.component.css']
})
export class ListingPicturesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextPage(){
    // nagivate to get started page
    this.router.navigate(['/listing/become-a-host/pricing']);
  }

}
