import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _isAuthorized$ = new BehaviorSubject(false);

  get isAuthorized$() {
    return this._isAuthorized$.asObservable();
  }

  logIn() {
    this._isAuthorized$.next(true);
  }
}
