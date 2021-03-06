import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as Cookies from 'js-cookie';
@Component ({
    selector: 'app-procedure-left-side-bar',
    templateUrl: './procedure-left-side-bar.component.html'
})

@NgModule({
  imports: [
    RouterModule
  ],
  exports: []
})

export class ProcedureLeftSideBarComponent implements OnInit {
  user = {email: null, role: 1, name: null, avatar: null};
  ngOnInit() {
    this.user.email = Cookies.get('email');
    this.user.role =  Cookies.get('role');
    this.user.name =  Cookies.get('name');
    this.user.avatar =  Cookies.get('avatar') || 'http://placehold.it/300x300';
  }
}
