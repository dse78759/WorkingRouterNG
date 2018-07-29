import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { BacklogComponent } from './backlog/backlog.component';
import { ComponentComponent } from './component/component.component';
import { SprintComponent } from './sprint/sprint.component';
import { UsersComponent } from './users/users.component';
import { TicketComponent } from './ticket/ticket.component';

import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [ { component:BacklogComponent, path:'Backlog'}, 
                 { component:SprintComponent, path:'Sprint'}];

@NgModule({
  declarations: [
    AppComponent,
    BacklogComponent,
    ComponentComponent,
    SprintComponent,
    UsersComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot ( routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
        console.log("==========");
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
        console.log("==========");
        
      }
}
