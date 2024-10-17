import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersTableComponent } from './users/components/users-table/users-table.component';
import { LoginFormComponent } from './login/components/login-form/login-form.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
