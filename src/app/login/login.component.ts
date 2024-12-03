import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      // Send login request to backend
      this.http.post('http://localhost:5000/api/login', loginData).subscribe(
        (response: any) => {
          alert(response.message);  // Login success message
          this.router.navigate(['/student-details']);  // Navigate to student details
        },
        (error) => {
          alert(error.error.message);  // Login error message
        }
      );
    }
  }
}
