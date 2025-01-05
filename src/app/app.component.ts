import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  students: any[] = [];
  courses: any[] = [];
  results: any[] = [];
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.testBackendConnection();
  }

  testBackendConnection(): void {
    this.apiService.getStudents().subscribe({
      next: (data) => this.students = data,
      error: (err) => this.error = 'Failed to load students'
    });

    this.apiService.getCourses().subscribe({
      next: (data) => this.courses = data,
      error: (err) => this.error = 'Failed to load courses'
    });

    this.apiService.getResults().subscribe({
      next: (data) => this.results = data,
      error: (err) => this.error = 'Failed to load results'
    });
  }
}
