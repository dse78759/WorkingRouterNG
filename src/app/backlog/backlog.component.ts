import { Component, OnInit } from '@angular/core';

@Component({
  
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("backlog");
  }

}
