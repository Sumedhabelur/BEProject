import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private http: HttpClient) {}

  loginAdmin(data) {
    return this.http.post('http://localhost:3000/admin/login', data);
  }


}
