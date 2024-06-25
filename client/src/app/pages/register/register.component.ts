import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';
import { ModalComponent } from 'src/app/shared/ui/modal/modal.component';
import { IRegister } from './model/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit
{
  registerForm : FormGroup = new FormGroup({});
  loading : boolean = false;
  modal : ModalComponent = new ModalComponent();

  constructor(private userService : UserService){}

  ngOnInit() : void {
      this.registerForm = new FormGroup({
        login : new FormControl('', Validators.required),
        email : new FormControl('', [Validators.required, Validators.email]),
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

    const data : IRegister = {
      name : this.registerForm.get('login')?.value,
      email : this.registerForm.get('email')?.value,
      password : this.registerForm.get('password')?.value,
    }

    console.log(data);

    this.loading = true;
    this.userService.register(data)
      .subscribe(res =>{ 
        this.loading = false;
        this.modal.open('Pomyslnie utworzono konto', "Sukces");
      }, err => {
        this.loading = false;
        this.modal.open(err.error, 'Błąd ' + err.status);
        console.log(err);
      })
  }

}
