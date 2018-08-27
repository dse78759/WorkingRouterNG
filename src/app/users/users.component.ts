import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  passedId: number = 44;

  aRoute: ActivatedRoute;

  constructor(ar: ActivatedRoute) {
    this.aRoute = ar;
  }

  ngOnInit() {
    console.log("User component init");

    this.aRoute.params.subscribe ( event => 
      { 
        console.log('hit activatedroute . got: '+ event['id'] ); 
       
        this.passedId=event['id'];
       
      }
    );
  }

}
