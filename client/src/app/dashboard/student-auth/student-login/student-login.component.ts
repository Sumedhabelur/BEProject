import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentAuthService } from '../studentAuthService/student-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoginFailed = false;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentAuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  onSubmitClick() {
    this.loginStudent();
  }

  loginStudent() {

    console.log(this.loginForm.get('userName'));
    const data = {
      userName: this.loginForm.get('userName').value,
      pass: this.loginForm.get('pass').value
    };
    this.studentService.loginStudent(data).subscribe((response: any) => {
      console.log('response', response);
      if (response.length > 0) {
        this.router.navigate(['/student']);
      } else {
        console.log('Login Failed');
        this.isLoginFailed = true;
      }

    });
  }
}
