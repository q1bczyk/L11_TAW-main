import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit
{
  registerForm: FormGroup = new FormGroup({});

  formValues = {
    login: '',
    email: '',
    password: ''
  };

  ngOnInit(): void {
      this.registerForm = new FormGroup({
        login : new FormControl(this.formValues.login, Validators.required),
        email : new FormControl(this.formValues.email, [Validators.required, Validators.email]),
        password : new FormControl(this.formValues.password, [Validators.required, Validators.minLength(8)])
      })
  }

  get controls() : string[]
  {
    return Object.keys(this.registerForm.controls);
  }

}
