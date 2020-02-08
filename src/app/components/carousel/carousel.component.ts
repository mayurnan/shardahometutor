import { Component, OnInit } from '@angular/core';
import {Carousel} from 'materialize-css';
import {carousels as carousel_data} from '../../../shared/carousels';
import {Carousel as carousel_model}  from '../../../shared/carousel';
import { baseurl } from '../../../shared/BaseURL';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  // providers: [ GoogleDriveProvider ]
})
export class CarouselComponent implements OnInit {

  
  carousels :carousel_model[] = carousel_data ; 

  constructor( ) { 
  }

   ngOnInit() {
  }


ngAfterViewInit(){
  let instance;
  var slider= document.querySelector('.carousel')
  instance = Carousel.init(slider,{
    fullWidth: true,
    indicators: true,
  });
      
  setInterval(function() {
    instance.next()
  }, 8000);
  //if not used HtMLElement than not allowed to use  click /onclick element
  // move next carousel
  // let nextBtn: HTMLElement =document.querySelector('.moveNextCarousel') as HTMLElement;
  // nextBtn.onclick = function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   instance.next()
  // };
  // move prev carousel
  // let prevBtn: HTMLElement =document.querySelector('.movePrevCarousel') as HTMLElement; 
  // prevBtn.onclick = function(e){
  //   e.preventDefault();
  //   e.stopPropagation();
  //   instance.prev()
  // };
}
}

