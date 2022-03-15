import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@ngnixt/auth';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
