import { Component, OnInit } from '@angular/core';
import * as Cookies from 'js-cookie';
@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html'
})

export class CommonHeaderComponent implements OnInit {
  ngOnInit () {
  }

  logout() {
    Cookies.remove('email');
    Cookies.remove('role');
    window.location.href = 'authenticate';
  }
}
