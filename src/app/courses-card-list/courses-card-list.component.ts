import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Course} from "../model/course";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'courses-card-list',
    templateUrl: './courses-card-list.component.html',
    styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

    @Input()
    courses: Course[];

    constructor( private courseService: CoursesService) {
    }

    ngOnInit() {
     /*  this.courseService.findAllCourses().subscribe(
        courses => {
          this.courses = courses;
          console.log(this.courses);
        }
      ) */
    }

    editCourse(course:Course) {


    }

}









