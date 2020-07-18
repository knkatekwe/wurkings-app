import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { API_ENDPOINT, ApiService } from './api.service';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
	providedIn: 'root'
})
export class ImageService {
	constructor(private http: HttpClient, private apiService: ApiService) {}

	upload(image): Observable<string | any> {

		const formData = new FormData();

		formData.append('files', image);

    return this.apiService.post('/upload', formData)
      .pipe(map((data) => console.log(data)));
	}
}
