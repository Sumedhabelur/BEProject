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


  // login(data): Observable<any> {
  //   return this.http.post("http://localhost:3000/student/login", data);
  // }

  login(data): Observable<any> {
    return this.http.post("http://localhost:3000/admin/login", data);
  }

  register(data): Observable<any> {
    return this.http.post("http://localhost:3000/student/register", data);
  }

  getStudentById(studentId) {
    return this.http.get(`http://localhost:3000/student/${studentId}`);
  }

  updateStudentByField(studentId, updateType, fieldToUpdate) {
    return this.http.put(`http://localhost:3000/student/update/${studentId}`, {
      updateType: updateType,
      field: fieldToUpdate
    });
  }
}
