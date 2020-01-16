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
  loginFrom: FormGroup;
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
    this.loginFrom = this.fb.group({
      userName: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  onSubmitClick() {
    this.loginStudent();
  }

  loginStudent() {
    const data = {
      userName: this.loginFrom.get('userName').value,
      pass: this.loginFrom.get('pass').value
    };
    this.studentService.loginStudent(data).subscribe((response: any) => {
      if (response.status == 'SUCCESS') {
        this.router.navigate(['/student']);
      } else {
        console.log('Login Failed')
        this.isLoginFailed = true;
      }
    });
  }
}
