import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-description',
  templateUrl: './listing-description.component.html',
  styleUrls: ['./listing-description.component.css']
})
export class ListingDescriptionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextPage(){
    this.router.navigate(['/listing/become-a-host/pictures']);
  }

}
