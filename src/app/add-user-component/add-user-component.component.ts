import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-component',
  templateUrl: './add-user-component.component.html',
  styleUrls: ['./add-user-component.component.scss']
})
export class AddUserComponentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  onSubmit() {
    this.userService.createUser(this.addForm.value).subscribe(() => this.router.navigate(['list-user']));
  }
}
