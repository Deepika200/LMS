import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student: any = null;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    const userId = 12;  // Replace with dynamic value (e.g., from login response or route param)

    this.apiService.getStudentByUserId(userId).subscribe(
      (data) => {
        this.student = data;
        console.log('Student details:', this.student);
      },
      (error) => {
        console.error('Error fetching student details:', error);
      }
    );
  }
}
