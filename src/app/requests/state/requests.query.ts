import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { RequestsStore, RequestsState } from './requests.store';
import { Request } from './request.model';

@Injectable({ providedIn: 'root' })
export class RequestsQuery extends QueryEntity<RequestsState, Request> {

  constructor(protected requestsStore: RequestsStore) {
    super(requestsStore);
  }

}
