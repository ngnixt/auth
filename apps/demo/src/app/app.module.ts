import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule, AuthOption, AUTH_OPTION } from '@ngnixt/auth';
import { map } from 'rxjs';

import { AppComponent } from './app.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthModule],
  providers: [
    {
      provide: AUTH_OPTION,
      useFactory: (userService: UserService) => {
        return {
          isAuthorized: () => userService.isAuthorized$,
          hasPermission: (permissions: string[]) =>
            userService.permission$.pipe(
              map((userPermissions) =>
                userPermissions.some((u) => permissions.includes(u))
              )
            ),
        } as AuthOption;
      },
      deps: [UserService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
