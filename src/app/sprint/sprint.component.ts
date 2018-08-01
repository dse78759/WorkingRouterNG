import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
 
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css']
})
export class SprintComponent implements OnInit {

    aRoute:ActivatedRoute;

  constructor( ar : ActivatedRoute ) {
    this.aRoute=ar;
   }

  ngOnInit() {
    console.log (" test");
    console.log("asdf", this.aRoute);

    console.log("params" + this.aRoute.params);
    console.log("query params" + this.aRoute.queryParams);
  }

}
