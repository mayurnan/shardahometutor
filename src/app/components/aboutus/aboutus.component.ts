import { Component, OnInit } from '@angular/core';
import {baseurl} from '../../../shared/BaseURL'

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  aboutImg=baseurl+"1OtqGBZHCQdDPhd8noz0LT0py8HQJaycK";
  constructor() { }

  ngOnInit() {
  }

}
