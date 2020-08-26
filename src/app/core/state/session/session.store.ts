import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface SessionState {
  token: string;
  name: string;
}

export function createInitialState(): SessionState {
  return {
    token: null,
    name: null,
    // ...storage.getSession(),
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {

  constructor() {
    super(createInitialState());
  }

  login(session: SessionState) {
    this.update(session);
    // storage.saveSession(session);
  }

  logout() {
    // storage.clearSesssion();
    this.update(createInitialState());
  }

}


