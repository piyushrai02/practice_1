import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class StudentDetailsService {
  studentUrl = "http://dummy.restapiexample.com/api/v1/employees";

  constructor(private http: HttpClient) {}

  getStudentDetails() {
    return this.http.get(this.studentUrl);
  }
}