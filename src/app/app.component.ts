import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  name = "Nitesh"

  courses = [{
    id: 1,
    title: "Js",
    author: "Nitesh"
  }, {
    id: 2,
    title: "Python",
    author: "Santu"
  }]

  delete(id) {
    this.courses = this.courses.filter(course => course.id !== id)
  }

}
