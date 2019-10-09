import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  EmailValidator
} from "@angular/forms";
// import { StudentDetailsService } from "../student-details/student-details.service";
// import { match } from "minimatch";
// import { Blog } from "../../blog";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: String;
  cDetails: any;
  loginForm: FormGroup;
  profileForm: FormGroup;
  updateProfile: FormGroup;
  submitted: boolean = false;
  email:any;
  pass:any;
  userData:any;
  userPass:any;
  errorMessage:any="";

  constructor(private formBulider1: FormBuilder,private router: Router) {}

  ngOnInit() {
    this.isForm();
   
  }

 
  isForm() {
    this.loginForm = this.formBulider1.group({
      mobile: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
     
    });
  }
  
  onSubmit() {
    this.submitted = true;
    this.errorMessage = ''
    if (this.loginForm.valid) {
      let pass = this.loginForm.controls.email.value;
      let cpass = this.loginForm.controls.mobile.value;
      let user = JSON.parse(localStorage.getItem('user'));
      
      if(pass == user.userName && cpass == user.password){
        this.router.navigate(['/studentDetail']);
      }
      else {
        console.log(this.errorMessage);
        this.errorMessage = 'User name OR Password is not Matched!'
      }
    }
    else {
      console.log("not true");
      if(this.loginForm.controls.email.invalid){
        this.errorMessage = 'Please Fill A valid EmailID!'
      }
      else{
      
        this.errorMessage = "please Fill A Password!"
      }
    }
    
  }

  
}
