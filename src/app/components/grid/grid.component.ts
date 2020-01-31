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

  constructor() { }

  ngOnInit() {
  }

}
