import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminAuthService } from '../adminAuthService/admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminForm: FormGroup;
  isLoginFailed = false;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.adminForm = this.fb.group({
      userName: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  onSubmitClick() {
    this.loginAdmin();
  }

  loginAdmin() {
    console.log(this.adminForm.get('userName'));
    const data = {
      userName: this.adminForm.get('userName').value,
      pass: this.adminForm.get('pass').value
    };

    this.router.navigate(['/admin']);

    this.adminService.loginAdmin(data).subscribe((response: any) => {
      console.log('response', response);
      console.log('sucessss');
      if (response.length > 0) {
       this.router.navigate(['/admin']);
      } else {
        console.log('Login Failed');
        this.isLoginFailed = true;
      }

    });
  }
}
