import { Component, OnInit } from '@angular/core';
import {Registration} from '../../../shared/RegistrationForm';
import {Course} from  '../../../shared/course'
import {courses} from  '../../../shared/courses'
import {Subject} from  '../../../shared/subject'
import {subjects} from  '../../../shared/subjects'
import {FormSelect} from 'materialize-css';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  Courses : Course[] = courses ;
  Subjects : Subject[] = subjects;
  instance;//instance for select
  FormModel = new Registration('','',undefined,[],[],'','',)
  responseMsg:string='';
  show_success:Boolean=false;
  show_error:Boolean=false;
  RegistrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.RegistrationForm = this.fb.group({
      username: '' ,
      email:'',
      phone: undefined,
      course:[],
      subject:[],
      location:'', 
      message:''
    });
    this.onChanges();
  }

  onChanges(){
    this.RegistrationForm.get('course').valueChanges.subscribe(val => {
      console.log(val);
    })
  }
  
  ngAfterViewInit(){
     this.instance = FormSelect.init(document.querySelectorAll('select'));  // initializing dropdown
  }  

  async onSubmit(){
    try{
      var index=0;
      // this.FormModel.course.map((elem)=>{
      //   this.FormModel.course[index] = this.Courses[parseInt(elem)].text
      //   index++;
      // })
      //  var index1=0;
      // this.FormModel.subject.map((elem)=>{
      //   this.FormModel.subject[index1] = this.Subjects[parseInt(elem)].name
      //   index1++;
      // })
      console.log("formModel is " , this.FormModel)
      // const result = await service.SubmitFrom(this.FormModel)
      
      this.FormModel = {username: '' ,email:'', phone: undefined, course:[], subject:[] , location:'', message:''}
      // this.responseMsg ="Form Submited Successfully"
      this.show_success=true
    }
    catch(error){
      this.FormModel = {username: '' ,email:'', phone: undefined, course:[], subject:[] , location:'', message:''}
      this.show_error=true
    }
    setTimeout(()=>
    {
      this.show_success=false;
      this.show_error=false;
    },5000)

}
  }
