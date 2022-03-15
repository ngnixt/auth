import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionDirective } from './permission.directive';
import { AuthorizeDirective } from './authorize.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [PermissionDirective, AuthorizeDirective],
  exports: [PermissionDirective, AuthorizeDirective],
})
export class AuthModule {}
