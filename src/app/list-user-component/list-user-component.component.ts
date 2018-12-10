import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user-component',
  templateUrl: './list-user-component.component.html',
  styleUrls: ['./list-user-component.component.scss']
})
export class ListUserComponentComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  users: User[];
  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.users = data);
  }


  deleteUser(user: User) {
    console.log(user);
    this.userService.deleteUser(user.id).subscribe(() => {
      this.users = this.users.filter(u => u !== user);
    });
  }

  addUser() {
    this.router.navigate(['add-user']);
  }

  editUser(user) {
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['edit-user']);
  }
}
