import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../../environments/environment';

import { LoginService } from '../../services/login.service';
@Component ({
    templateUrl: './login-form.component.html'
})

export class LoginFormComponent implements OnInit {
    ngOnInit() {

    }

    onSignin() {
      window.location.href = 'newsfeed';
    }
}
