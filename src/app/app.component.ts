import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private  formBuilder:FormBuilder){

  }
  /*userForm =new FormGroup(
    {
      name: new FormControl(''),
      password:new FormControl(''),
      email: new FormControl('')
    }
  )*/

  userForm = this.formBuilder.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    password:[''],
    email:[''],
    alternateEmails: this.formBuilder.array([])
  })

  get alternateEmails(){
    return this.userForm.get('alternateEmails') as FormArray
  }

  addAlternateEmails(){
    this.alternateEmails.push(this.formBuilder.control(''))
  }

}
