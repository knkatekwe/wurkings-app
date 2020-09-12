import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../state/listing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-detail-form',
  templateUrl: './listing-detail-form.component.html',
  styleUrls: ['./listing-detail-form.component.css']
})
export class ListingDetailFormComponent implements OnInit {

  constructor(private listingService: ListingService, private router: Router) { }

  ngOnInit() {

  }

  save(data){
    console.log(data)
    //this.isSubmitting = true
    this.listingService.add(data).subscribe(
			(res) => {
        //this.isSubmitting = false
				//this.alertService.confirm('Checkout', 'Order successfully placed', 'Ok')
				this.router.navigateByUrl('/listing/rent-out/' + res.id + '/pictures')
			},
			(err) => {
        //this.isSubmitting = false
        //this.alertService.confirm('Checkout', 'Failed to place order, please try again', 'Ok')
        console.log(err)
			}
		);
  }

}
