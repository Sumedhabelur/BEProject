import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  selectedType = 'admin';

  constructor() {}

  ngOnInit() {}

  selectAuthType(type){
<<<<<<< HEAD
    console.log('hello')
=======
    console.log('jhgytyeutyyr')
>>>>>>> c1f73e1e8cb587600844be588bf9338e6c0a8db8
    this.selectedType = type;
  }
}
