import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';
import { ModalComponent } from 'src/app/shared/ui/modal/modal.component';
import { ILogin } from './models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  registerForm : FormGroup = new FormGroup({});
  loading : boolean = false;
  modal : ModalComponent = new ModalComponent();

  constructor(private userService : UserService, private router : Router){}

  ngOnInit() : void {
      this.registerForm = new FormGroup({
        login : new FormControl('', Validators.required),
        password : new FormControl('', [Validators.required, Validators.minLength(8)])
      })
  }

  get controls() : string[]
  {
    return Object.keys(this.registerForm.controls);
  }

  onSubmit() : void
  {
    if(this.registerForm.invalid)
      return

    const data : ILogin = {
      login : this.registerForm.get('login')?.value,
      password : this.registerForm.get('password')?.value,
    }

    this.loading = true;
    this.userService.login(data)
      .subscribe(res =>{ 
        this.loading = false;
        localStorage.setItem('token', res.token);
        this.router.navigate(['/blog'])
      }, err => {
        this.loading = false;
        this.modal.open(err.error, 'Błąd ' + err.status);
      })
  }

}
