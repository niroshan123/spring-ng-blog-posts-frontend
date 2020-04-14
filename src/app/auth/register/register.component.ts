import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegisterPayload } from '../register-payload';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm : FormGroup;
registerPayload : RegisterPayload;


constructor(private formBuilder: FormBuilder, private authService:AuthService) { 
this.formBuilder.group({
  username:'',
  email:'',
  password:'',
  confirmpassword:''
  

});
this.registerPayload={
  username:'',
  email:'',
  password:'',
  confirmpassword:''
  

};

  }

  ngOnInit() {
  }
  onSubmit(){
  this.registerPayload.username=this.registerForm.get('username').value;
  this.registerPayload.email=this.registerForm.get('email').value;
  this.registerPayload.password=this.registerForm.get('password').value;
  this.registerPayload.confirmpassword=this.registerForm.get('confirmpassword').value;

  this.authService.register(this.registerPayload).subscribe(data=>{
    console.log('register success'),error=>{
      console.log('register failed');
    }
  })
  }
}

