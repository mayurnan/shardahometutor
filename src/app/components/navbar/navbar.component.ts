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
  baseurl=baseurl+'1g2IYW6i4Ko6ad-d-ohzFInIdADdChgH7';
  constructor() { 
  }


  ngAfterViewInit(): void {
    Sidenav.init(document.querySelector('.sidenav'));
  }

  ngOnInit() {
    
  }

}

