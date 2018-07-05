import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-userlist',
  templateUrl: 'userlist.component.html',
})

export class UserListComponent implements OnInit {
  data: User[];
  
  constructor(
    private userService: UserService,
    public routes: Router,
  ) {}
 
  ngOnInit() {
    this.userService.getResponse().subscribe((posts) => {
      this.data = posts;
      console.log(this.data);
    })
  }

  createMe(){
    this.routes.navigate(['register']);
  }
}