import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public myForm: FormGroup;
  private courseCount: number = 1;

  constructor(private formBuilder: FormBuilder){

    this.myForm = formBuilder.group({
      course1: ['', Validators.required]
    });

  }

  addControl(){
    this.courseCount++;
    this.myForm.addControl('course' + this.courseCount, new FormControl('', Validators.required));
  }

  removeControl(){
    this.myForm.removeControl('course' + this.courseCount);
    this.courseCount--;
  }

}