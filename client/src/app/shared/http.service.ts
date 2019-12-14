import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getAllStudents() {
    return this.http.get("http://localhost:3000/student");
  }

  login(data): Observable<any> {
    return this.http.post("http://localhost:3000/student/login", data);
  }

  getStudentById(studentId) {
    return this.http.get(`http://localhost:3000/student/${studentId}`);
  }
}
