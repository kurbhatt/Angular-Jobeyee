import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { UserListService } from './userlist.service';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'userlist.component.html',
  providers: [UserListService]
})

export class UserListComponent {
  welcome: string = 'List Of User In API';

  constructor(
    public userlistService: UserListService,
    public http: HttpClient
  ) { }

  inviteUser() {
    let headers = new Headers();
    headers.append('Content-Type', 'api/user/filter');
    let body = {
      "filter": "created_on",
      "sort": "DESC",
      "name": "Apar"
    };
    return this.http.post('http://nameless-garden-70410.herokuapp.com/api/user/filter', JSON.stringify(body), )
    .subscribe((res:Response) => res.json());
  }
}