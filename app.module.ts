import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule, MatTableModule, MatFormFieldModule, MatSelectModule, MatMenuModule, MatInputModule, MatSortModule } from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './register/register.service';
import { UserListComponent } from './user-list/userlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CdkTableModule } from '@angular/cdk/table';
import { UserListService } from './user-list/userlist.service';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    CdkTableModule,
    MatInputModule,
    MatSortModule,
    // InMemoryWebApiModule.forRoot(BookData) 
  ],

  declarations: [
    AppComponent,
    RegisterComponent,
    UserListComponent,
    NavbarComponent
  ],

  providers: [ RegisterService, UserListService ],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
