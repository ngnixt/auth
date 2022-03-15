import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const AUTH_OPTION = new InjectionToken<AuthOption>('NGNIXT_AUTH');

export interface AuthOption {
  isAuthorized: () => Observable<boolean> | boolean;

  hasPermission: (permissions: Array<unknown>) => Observable<boolean> | boolean;
}
