<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/shared/http.service';
import { Router } from '@angular/router';
=======
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpService } from "src/app/shared/http.service";
import { Router } from "@angular/router";
>>>>>>> c1f73e1e8cb587600844be588bf9338e6c0a8db8

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private router: Router
<<<<<<< HEAD

  ) {
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName :["", [Validators.required]],
      pass :["", [Validators.required]],
      firstName :["", [Validators.required]],
      lastName :["", [Validators.required]],
      dob :["", [Validators.required]],
      email :["", [Validators.required]],
      typeOfAdmission:["", [Validators.required]],
      class :["", [Validators.required]],
      dept :["", [Validators.required]],

=======
  ) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ["", [Validators.required]],
      pass: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      
      lastName: ["", [Validators.required]],
      dob: ["", [Validators.required]],
      email: ["", [Validators.required]],
      typeOfAdmission: ["", [Validators.required]],
      class: ["", [Validators.required]],
      dept: ["", [Validators.required]]
>>>>>>> c1f73e1e8cb587600844be588bf9338e6c0a8db8
    });
  }

  registerUser() {}
<<<<<<< HEAD

=======
>>>>>>> c1f73e1e8cb587600844be588bf9338e6c0a8db8
}
