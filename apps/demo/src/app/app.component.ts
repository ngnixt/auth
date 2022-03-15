import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'auth-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private userService: UserService) {}

  logIn() {
    this.userService.logIn();
  }

  logOut() {
    this.userService.logOut();
  }

  setAdminPermission() {
    this.userService.setAdminPermission();
  }

  unsetAdminPermission() {
    this.userService.unsetAdminPermission();
  }
}
