import {Component} from '@angular/core';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

const SAMPLE_TEXT = "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

@Component({
  selector: "create-course-step-1",
  templateUrl:"create-course-step-1.component.html",
  styleUrls: ["create-course-step-1.component.scss"]
})
export class CreateCourseStep1Component {

  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    releasedAt: [new Date(), Validators.required],
    category: ['BEGINNER', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: [SAMPLE_TEXT, [Validators.required, Validators.minLength(3)]]
  });

  holidays = [
    { date: "2022-10-02" },
    { date: "2022-10-03" },
    { date: "2022-10-14" },
    { date: "2022-10-05" },
    { date: "2022-10-06" }
  ];

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
     // Only highligh dates inside the month view.
     if (view === 'month') {
      const date = cellDate.getDate();
      const dateSearch = this.dateToString(cellDate);
      // Highlight the 1st and 15th day of each month.
      // return date === 1 || date === 15 ? 'highlight-date' : '';
      // Highlight Holidays
      return this.holidays.find(f => f.date == dateSearch) || date === 1 || date === 15
      ? "highlight-date" : undefined;
    }
    return '';
  };


  constructor(private fb: UntypedFormBuilder) {}

  dateToString(date: any) {
    return (
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2)
    );
  }

  get courseTitle() {
    return this.form.controls['title'];
  }

}
