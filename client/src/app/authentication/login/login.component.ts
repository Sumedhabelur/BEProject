import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpService } from "src/app/shared/http.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private router: Router,
    ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ["", [Validators.required]],
      pass: ["", [Validators.required]]
    });
  }

  onSubmit() {
    this.httpService.login(this.loginForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['../register']);
    });
  }
}
