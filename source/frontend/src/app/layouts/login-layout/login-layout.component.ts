import { Component, OnInit } from '@angular/core';
import * as Cookies from 'js-cookie';

@Component({
  templateUrl: './login-layout.component.html'
})

export class LoginLayoutComponent implements OnInit {
  ngOnInit () {
    // const email = Cookies.get('email');
    // const role =  Cookies.get('role');
    // if (typeof email !== 'undefined' || typeof role !== 'undefined') {
    //   window.location.href = './newsfeed';
    //   return;
    // }
  }
}
