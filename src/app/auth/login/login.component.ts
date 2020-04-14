import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginPayload } from '../login-payload';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm:FormGroup;
loginPayload : LoginPayload;
  constructor(private authService: AuthService) { 
this.loginForm=new FormGroup({
  username : new FormControl,
  password : new FormControl
})

  }

  ngOnInit() {
  }
  onSubmit(){
    this.loginPayload.username=this.loginForm.get('username').value;
    this.loginPayload.password=this.loginForm.get('password').value;
    this.authService.login(this.loginPayload);
  }

}
