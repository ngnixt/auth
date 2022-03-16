import { HasAccessDirective } from './has-access.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizeDirective } from './authorize.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [HasAccessDirective, AuthorizeDirective],
  exports: [HasAccessDirective, AuthorizeDirective],
})
export class AuthModule {}
