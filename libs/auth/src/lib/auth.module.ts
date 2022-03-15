import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthDirective } from './auth.directive';
import { PermissionDirective } from './permission.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthDirective, PermissionDirective],
  exports: [AuthDirective, PermissionDirective],
})
export class AuthModule {}
