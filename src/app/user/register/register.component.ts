import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ])
  email= new FormControl('')
  age= new FormControl('')
  password= new FormControl('')
  confirm_password= new FormControl('')
  phoneNumber= new FormControl('')

  registerForm = new FormGroup({
 name: this.name,
 email: this.email,
 age: this.age,
 password: this.password,
 confirm_password: this.confirm_password,
 phoneNumber: this.phoneNumber
})
}
