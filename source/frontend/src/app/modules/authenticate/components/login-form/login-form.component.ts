import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../../environments/environment';

import { LoginService } from '../../services/login.service';
@Component ({
    templateUrl: './login-form.component.html'
})

export class LoginFormComponent implements OnInit {
    model: any = {
        email: '',
        password: ''
    };
    errorMessage: string;

    constructor(
        private loginService: LoginService
    ){}
    ngOnInit() {

    }

    login(): void {
      
      this.loginService.login(this.model.email, this.model.password).subscribe(
          response => {
            console.log(response);
            window.location.href = 'newsfeed';
          },
          (error: Error) => {
            this.errorMessage = error.message;
            this.model.password = '';
          });
    }
}
