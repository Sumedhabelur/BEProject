import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/shared/http.service";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})
export class StudentListComponent implements OnInit {
  students = [
    {
      _id: "5da3277b3b845f2c40eac42a",
      email: "admin@test.com",
      pass: "Random",
      firstName: "pritam",
      lastName: "kamble",
      class: "FE",
      admissionDate: "2019-09-12T18:30:00.000Z",
      dob: "1990-08-09T18:30:00.000Z",
      dept: "Computer",
      typeOfAdmission: "DSE",
      userName: "19DC0"
    },
    {
      _id: "5da3277b3b845f2c40eac42a",
      email: "admin@test.com",
      pass: "Random",
      firstName: "pritam",
      lastName: "kamble",
      class: "FE",
      admissionDate: "2019-09-12T18:30:00.000Z",
      dob: "1990-08-09T18:30:00.000Z",
      dept: "Computer",
      typeOfAdmission: "DSE",
      userName: "19DC0"
    },
    {
      _id: "5da3277b3b845f2c40eac42a",
      email: "admin@test.com",
      pass: "Random",
      firstName: "pritam",
      lastName: "kamble",
      class: "FE",
      admissionDate: "2019-09-12T18:30:00.000Z",
      dob: "1990-08-09T18:30:00.000Z",
      dept: "Computer",
      typeOfAdmission: "DSE",
      userName: "19DC0"
    },
    {
      _id: "5da3277b3b845f2c40eac42a",
      email: "admin@test.com",
      pass: "Random",
      firstName: "pritam",
      lastName: "kamble",
      class: "FE",
      admissionDate: "2019-09-12T18:30:00.000Z",
      dob: "1990-08-09T18:30:00.000Z",
      dept: "Computer",
      typeOfAdmission: "DSE",
      userName: "19DC0"
    },
    {
      _id: "5da3277b3b845f2c40eac42a",
      email: "admin@test.com",
      pass: "Random",
      firstName: "pritam",
      lastName: "kamble",
      class: "FE",
      admissionDate: "2019-09-12T18:30:00.000Z",
      dob: "1990-08-09T18:30:00.000Z",
      dept: "Computer",
      typeOfAdmission: "DSE",
      userName: "19DC0"
    },
    {
      _id: "5da3277b3b845f2c40eac42a",
      email: "admin@test.com",
      pass: "Random",
      firstName: "pritam",
      lastName: "kamble",
      class: "FE",
      admissionDate: "2019-09-12T18:30:00.000Z",
      dob: "1990-08-09T18:30:00.000Z",
      dept: "Computer",
      typeOfAdmission: "DSE",
      userName: "19DC0"
    }
  ];
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getAllStudents().subscribe((result: any) => {
      console.log('result', JSON.stringify(result) )
      this.students = result.result;
    });
  }
}
