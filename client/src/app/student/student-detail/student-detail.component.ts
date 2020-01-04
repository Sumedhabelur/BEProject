import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "src/app/shared/http.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-student-detail",
  templateUrl: "./student-detail.component.html",
  styleUrls: ["./student-detail.component.css"]
})
export class StudentDetailComponent implements OnInit {
  studentId: string;
  student: any;
  detailForm: FormGroup;
  constructor(
    private active: ActivatedRoute,
    private http: HttpService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.active.params.subscribe(params => {
      this.studentId = params.id;
      this.getStudentById(this.studentId);
    });
    this.buildForm();
  }

  buildForm() {
    this.detailForm = this.fb.group({
      email: [""],
      pass: [""],
      firstName: [""],
      lastName: [""],
      class: [""],
      admissionDate: [""],
      dob: [""],
      userName: [""],
      typeOfAdmission: [""],
      dept: [""]
    });
  }

  getStudentById(studentId) {
    this.http.getStudentById(studentId).subscribe((res: any) => {
      console.log("res", res.result[0]);
      this.student = res.result[0];
      this.detailForm.get('firstName').setValue(this.student.firstName);
      this.detailForm.get('lastName').setValue(this.student.lastName);
      this.detailForm.get('email').setValue(this.student.email);
      this.detailForm.get('class').setValue(this.student.class);
      this.detailForm.get('dob').setValue(this.student.dob);
      this.detailForm.get('typeOfAdmission').setValue(this.student.typeOfAdmission);
      this.detailForm.get('dept').setValue(this.student.dept);



    });
  }

  updateStudent(updateType) {
    this.http.updateStudentByField( this.studentId, updateType, this.detailForm.get(updateType).value )
      .subscribe((res: any) => {
        this.getStudentById(this.studentId);
      });
  }
}
