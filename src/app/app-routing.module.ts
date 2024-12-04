import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    // {path:'student-details',component:StudentDetailsComponent},
    { path: 'student-details/:userId', component: StudentDetailsComponent },
    { path: 'course-details/:courseId', component: CourseDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
