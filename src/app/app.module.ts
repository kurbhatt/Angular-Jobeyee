import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './user/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user/userlist.component';
import { HttpModule } from '@angular/http';
import {UserService } from './user/user.service';
import { UserFilterPipe } from './user/user-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
  ],

  declarations: [
    AppComponent,
    RegisterComponent,
    UserListComponent,
    NavbarComponent,
    UserFilterPipe,
  ],

  providers: [ UserService, UserFilterPipe ],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
