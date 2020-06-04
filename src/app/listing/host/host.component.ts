import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ListingDataService } from './components/listing-data.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  @Input()    listingData: any;

  constructor(private router: Router, private listingDataService: ListingDataService) { }

  ngOnInit(): void {
    this.listingData = this.listingDataService.getListingData();
    console.log(this.listingData + ' loaded!');
    // nagivate to get started page
    //  this.router.navigate(['/listing/become-a-host/title']);
  }

}
