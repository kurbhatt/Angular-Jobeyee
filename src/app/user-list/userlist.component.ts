
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { UserListService } from './userlist.service';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Component({
  templateUrl: 'userlist.component.html',
  providers: [UserListService],
  styles: [`
  .success{
    color: green;
    font-size: 20px;
}
.error{
    color: red;
    font-size: 20px;
} 
  `]
})

export class UserListComponent implements OnInit {
  bookName: String;
  users: User[];
  errorMessage: String;
  book = new User();
  constructor(
    private http: HttpClient,
    private userlistService: UserListService
  ) { }

  ngOnInit(): void {
    this.fetchBooks();
  }
  fetchBooks(): void {
    this.userlistService.getAll()
      .subscribe(books => this.users = books,
        error => this.errorMessage = <any>error);
  }
  addBook(): void {
    this.userlistService.addBookWithObservable(this.book)
      .subscribe(book => {
        this.fetchBooks();
        this.reset();
        this.bookName = book.name;
      },
        error => this.errorMessage = <any>error);
  }
  private reset() {
    this.book.name = null;
    this.errorMessage = null;
    this.bookName = null;
  }
}