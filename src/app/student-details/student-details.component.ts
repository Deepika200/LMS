import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';  // Import ActivatedRoute to get the route params

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student: any = null;
  userId: number;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the userId from the route parameters
    this.route.paramMap.subscribe(params => {
      this.userId = +params.get('userId')!;  // Convert string to number
      this.fetchStudentData();
    });
  }

  fetchStudentData() {
    this.apiService.getStudentByUserId(this.userId).subscribe(
      (data) => {
        this.student = data;
        console.log('Student details:', this.student);
      },
      (error) => {
        console.error('Error fetching student details:', error);
      }
    );
  }

  getCourseName(courseId: number): string {
    const courseNames = {
      1: 'Computer Science',
      2: 'Information Technology',
      3: 'Electrical Engineering',
      4: 'Electronics and Communication',
    };
    return courseNames[courseId] || 'Unknown Course'; // Return the course name based on courseId
  }
}
