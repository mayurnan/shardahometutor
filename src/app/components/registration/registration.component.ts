import { Component, OnInit } from '@angular/core';
import {Registration} from '../../../shared/RegistrationForm';
import {Course} from  '../../../shared/course'
import {courses} from  '../../../shared/courses'
import {FormSelect} from 'materialize-css';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import service from '../../../services/axiosreq'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  Courses : Course[] = courses ;
  instance;//instance for select
  FormModel = new Registration('','',undefined,'',[],'','','')
  responseMsg:string='';
  show_success:Boolean=false;
  show_error:Boolean=false;
  RegistrationForm: FormGroup;
  loader= false;

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
      this.loader= true

      const result = await service.SubmitFrom(this.FormModel)

      this.FormModel = {username: '' ,email:'', phone: undefined, course:[], subject:'' , location:'', std: '',message:''}
      // this.responseMsg ="Form Submited Successfully"
      this.show_success=true
      this.loader= false
    }
    catch(error){
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
