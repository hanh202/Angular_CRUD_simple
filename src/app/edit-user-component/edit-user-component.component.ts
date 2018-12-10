import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user-component',
  templateUrl: './edit-user-component.component.html',
  styleUrls: ['./edit-user-component.component.scss']
})
export class EditUserComponentComponent implements OnInit {

  editForm: FormGroup;
  user: User;


  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    const userId = localStorage.getItem('editUserId');

    this.userService.getUserById(userId).subscribe(data => this.editForm.setValue(data));

    console.log(userId);
  }

  onSubmit() {
    this.userService.updateUser(this.editForm.value).subscribe(() => this.router.navigate(['list-user']));
  }

}
