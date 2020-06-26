import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from '.';
import { Catergory } from '..';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatergoryService {

  constructor(private apiService: ApiService,
    private http: HttpClient) { }

get(id): Observable<Catergory> {
return this.apiService.get('/catergories/' + id)
.pipe(map(data => data));
}

destroy(id) {
return this.apiService.delete('/catergories/' + id);
}

getPaymentTypes(): Observable<any>{
return this.http.get('https://strapi-wurkings-api.herokuapp.com/payment-types')
}

getCategories(): Observable<any>{
  return this.http.get('https://strapi-wurkings-api.herokuapp.com/catergories')
  }

favorite(id): Observable<Catergory> {
return this.apiService.post('/catergories/' + id + '/favorite');
}

unfavorite(id): Observable<Catergory> {
return this.apiService.delete('/catergories/' + id + '/favorite');
}

}
