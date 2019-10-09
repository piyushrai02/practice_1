import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  EmailValidator
} from "@angular/forms";
import { StudentDetailsService } from "../lazymodule/student-details/student-details.service";
import { match } from "minimatch";
import { Blog } from "../blog";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  name: String;
  cDetails: any;
  registerForm: FormGroup;
  profileForm: FormGroup;
  updateProfile: FormGroup;
  submitted: boolean = false;
  userData:any;
  userPass:any;

  constructor(private formBulider: FormBuilder,private router: Router) {}

  ngOnInit() {
    this.isForm();
    this.initArrayForm();
  }

  isForm() {
    this.registerForm = this.formBulider.group({
      fname: ["", Validators.required],
      lname: ["", Validators.required],
      mobile: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required]
    });
  }

  initArrayForm() {
    this.profileForm = this.formBulider.group({
      firstName: ["", Validators.required],
      lastName: [""],
      address: this.formBulider.group({
        street: [""],
        city: [""],
        state: [""],
        zip: [""]
      }),
      aliases: this.formBulider.array([this.formBulider.control("")])
    });
  }

  initArryaFrom() {
    this.updateProfile = this.formBulider.group({
      firstName: [" ", Validators.required],
      email: [" ", [Validators.required, Validators.email]],
      addresss: this.formBulider.group({
        street: [" "],
        pincode: [""],
        colony: [" "]
      })
    });
    country: this.formBulider.array([this.formBulider.control(" ")]);
  }

  get f() {
    return this.registerForm.controls;
  }

  get aliases() {
    return this.profileForm.get("aliases") as FormArray;
  }
  addAlias() {
    this.aliases.push(this.formBulider.control(""));
  }
  get countr() {
    return this.updateProfile.get("country") as FormArray;
  }
  addcountr() {
    this.countr.push(this.formBulider.control(""));
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      let pass = this.registerForm.controls.password.value;
      let cpass = this.registerForm.controls.confirmPassword.value;
      if (pass == cpass){
      this.userData = this.registerForm.controls.email.value 
      this.userPass = this.registerForm.controls.password.value 
      localStorage.setItem('user', JSON.stringify({
        userName: this.userData,
        password: this.userPass
      }));
      this.router.navigate(['/login']);
      
      }
      else {
        console.log("not true");
      }
    } else {
      console.log("not true");
    }
  }
}
