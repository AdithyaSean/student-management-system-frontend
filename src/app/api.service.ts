import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api/v1';

  constructor(private http: HttpClient) { }

  // Student endpoints
  getStudents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/students`);
  }

  // Course endpoints  
  getCourses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/courses`);
  }

  // Result endpoints
  getResults(): Observable<any> {
    return this.http.get(`${this.apiUrl}/results`);
  }
}
