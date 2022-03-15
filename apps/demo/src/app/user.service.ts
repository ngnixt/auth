import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _isAuthorized$ = new BehaviorSubject(false);
  private _permission$ = new BehaviorSubject<string[]>([]);

  get isAuthorized$() {
    return this._isAuthorized$.asObservable();
  }

  get permission$() {
    return this._permission$.asObservable();
  }

  logIn() {
    this._isAuthorized$.next(true);
  }

  logOut() {
    this._isAuthorized$.next(false);
  }

  setAdminPermission() {
    this._permission$.next(['admin']);
  }

  unsetAdminPermission() {
    this._permission$.next([]);
  }
}
