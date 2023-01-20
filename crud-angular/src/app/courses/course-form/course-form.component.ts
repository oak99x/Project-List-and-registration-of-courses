import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private service: CoursesService,
    private snackBar: MatSnackBar
    ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    })
  }

  onSubmit(){
    this.service.save(this.form.value)
      .subscribe(
        result => console.log(result), 
        error => this.onError()
      );
  }

  onCancel(){
    console.log('onCansel')
  }

  private onError(){
    this.snackBar.open('Error saving course','', {duration: 5000})
  }
}
