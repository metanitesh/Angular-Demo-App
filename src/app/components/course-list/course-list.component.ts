import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input() courses
  @Input() name
  @Output() delete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }



}
