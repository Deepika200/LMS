import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: any = null;
  courseId: number;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    // Get the courseId from the route params
    this.courseId = +this.route.snapshot.paramMap.get('courseId')!;  // 'courseId' is the parameter in the route

    // Fetch the course details using the courseId
    this.apiService.getCourseById(this.courseId).subscribe(
      (data) => {
        this.course = data;
        console.log('Course details:', this.course);
      },
      (error) => {
        console.error('Error fetching course details:', error);
      }
    );
  }
}
