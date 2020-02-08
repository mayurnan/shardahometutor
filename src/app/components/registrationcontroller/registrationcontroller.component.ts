import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-registrationcontroller',
  templateUrl: './registrationcontroller.component.html',
  styleUrls: ['./registrationcontroller.component.scss']
})
export class RegistrationcontrollerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    let instance = M.Tabs.init(document.getElementsByClassName('tabs')​[0])
    let indicator= document.getElementsByClassName('indicator')[0]
    indicator.classList.add("hide");
    }
}

