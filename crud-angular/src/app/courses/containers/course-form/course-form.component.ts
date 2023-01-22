import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form = this.formBuilder.group({
    name: [''],
    category: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    //this.form
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(
        result => this.onSuccess(),
        error => this.onError()
      );
  }

  onCancel() {
    this.location.back()
  }

  private onSuccess() {
    this.snackBar.open('Course saved successfully!', '', { duration: 5000 })
    this.location.back()
  }

  private onError() {
    this.snackBar.open('Error saving course', '', { duration: 5000 })
  }
}
