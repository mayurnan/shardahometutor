
import { Component, OnInit } from '@angular/core';
import {Grid} from '../../../shared/grid';
import {gridData} from '../../../shared/grid_data'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  grid_data : Grid[] = gridData
  data_len= [...Array(Math.ceil(this.grid_data.length/3)).keys()]
  grids = this.split(this.grid_data , 3);

  split(arr, subArrSize){
    let res=[], subArr=[],resIndex=0;
    for (let index = 0; index < arr.length; index++) {
      if(resIndex >= subArrSize ) {
        resIndex =0 
        res.push(subArr)
        subArr=[]
      }
     subArr.push(arr[index])
      resIndex++;
    }
    res.push(subArr)
    return res;
  }

  constructor() {
   }

  ngOnInit() {
  }

}
