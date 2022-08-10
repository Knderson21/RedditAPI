import { Component, Input, OnInit } from '@angular/core';
import { Child } from '../Reddit';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.css']
})
export class SingleResultComponent implements OnInit {

  @Input() children:Child = {} as Child;
  
  constructor() { }

  ngOnInit(): void {
  }

}
