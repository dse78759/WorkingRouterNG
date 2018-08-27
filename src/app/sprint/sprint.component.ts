import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({

  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css']
})
export class SprintComponent implements OnInit {

  aRoute: ActivatedRoute;

  passedId:number=0;

  constructor(ar: ActivatedRoute) {
   
   this.aRoute = ar;
  }

  ngOnInit() {
    //console.log(' test');
    console.log('activated route', this.aRoute);
    
    this.aRoute.params.subscribe(event => 
      { 
        console.log('hit activatedroute subscription. got: '+ event['id'] ); 
       
        this.passedId=event['id'];
        //this.displayObjectKeys(event);

        //console.log(" passed: "+  event['id'] );
      }
    );

  }

  displayObjectKeys ( obj : any) {
    const keys=Object.keys (obj);
        
    keys.forEach(element => {
      console.log('    '+JSON.stringify(element) + ' = ' + obj[element]);
    });

  }

}
