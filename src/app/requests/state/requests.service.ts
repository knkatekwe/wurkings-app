import { Injectable } from '@angular/core';
import { RequestsStore } from './requests.store';

@Injectable({ providedIn: 'root' })
export class RequestsService{

  constructor(protected requestStore: RequestsStore) {
  }

}
