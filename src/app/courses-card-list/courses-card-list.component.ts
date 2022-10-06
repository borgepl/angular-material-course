import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Course} from "../model/course";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CoursesService } from '../services/courses.service';
import { openEditCourseDialog } from '../course-dialog/course-dialog.component';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'courses-card-list',
    templateUrl: './courses-card-list.component.html',
    styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

    @Input()
    courses: Course[];

    constructor( private courseService: CoursesService,
                 private dialog: MatDialog
              ) {
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

      openEditCourseDialog(this.dialog, course)
        .pipe(
          filter(val => !!val)
        )
        .subscribe(
          val => console.log("new course value:", val)
        );
    }

}









