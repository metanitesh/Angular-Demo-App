import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';


const routes: Routes = [
  { path: 'add-course', component: AddCourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
