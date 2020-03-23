import { Component, OnInit } from '@angular/core';
import {Registration} from '../../../shared/teacherRegistrationForm';
import {Course} from  '../../../shared/course'
import {courses} from  '../../../shared/courses'
import {FormSelect} from 'materialize-css';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import service from '../../../services/axiosreq'

@Component({
  selector: 'app-teacher-registration',
  templateUrl: './teacher-registration.component.html',
  styleUrls: ['./teacher-registration.component.scss']
})
export class TeacherRegistrationComponent implements OnInit {
  Courses : Course[] = courses ;
  instance;//instance for select
  FormModel = new Registration('','',undefined,'',[],'','','')
  responseMsg:string='';
  show_success:Boolean=false;
  show_error:Boolean=false;
  RegistrationForm: FormGroup;
  loader;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {}

  
  ngAfterViewInit(){
     this.instance = FormSelect.init(document.querySelectorAll('select'));  // initializing dropdown
  }  

  async onSubmit(){
    try{
      var index=0;
      this.loader= true

      const result = await service.SubmitTeacherFrom(this.FormModel)

      this.FormModel = {username: '' ,email:'', phone: undefined, course:[], subject:'' , experience:'', std: '',message:''}
      // this.responseMsg ="Form Submited Successfully"
        this.show_success=true
        this.loader= false
    }
    catch(error){
      console.log(error)
      this.loader= false
      // this.FormModel = {username: '' ,email:'', phone: undefined, course:[], subject:'' , location:'', std:'', message:''}
      this.show_error=true
    }
    setTimeout(()=>
    {
      this.loader= false
      this.show_success=false;
      this.show_error=false;
    },5000)

}
  }
