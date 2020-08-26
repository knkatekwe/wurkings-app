import { Injectable } from '@angular/core';
import { ListingStore} from './listing.store';
import { ApiService } from 'src/app/core';

@Injectable({ providedIn: 'root' })
export class ListingService {
	constructor(protected listingStore: ListingStore, private apiService: ApiService) {}

	async getAll() {
		const response = await this.apiService.get('/listings').toPromise();
		this.listingStore.set(response);
  }

  async addListing(id, listing) {
    const commentId = await this.apiService.post('/listings', listing).toPromise();

    this.listingStore.update(id, listing => listing);
  }

  async editListing(id, listing) {
    await this.apiService.put('/listings/' + id, listing).toPromise();

    this.listingStore.update(id, listing => listing);
  }

  async deleteListing(id) {
    await this.apiService.delete('/listings' + id).toPromise();

    this.listingStore.remove(id);
  }

}
