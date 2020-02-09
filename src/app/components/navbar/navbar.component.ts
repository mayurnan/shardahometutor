import { Component, OnInit } from '@angular/core';
// import {Sidenav} from 'materialize-css';
import {Sidenav} from 'materialize-css';

import {baseurl} from '../../../shared/BaseURL'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logo=baseurl+'13gPS361q1KJg25e3WCpgh2CpYHntXJIQ';
  constructor() { 
  }


  ngAfterViewInit(): void {
    Sidenav.init(document.querySelector('.sidenav'));
  }

  ngOnInit() {
    
  }

}

