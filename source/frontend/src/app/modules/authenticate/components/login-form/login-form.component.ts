import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
@Component ({
    templateUrl: './login-form.component.html'
})

export class LoginFormComponent implements OnInit {
    user = {
      email: '',
      password: ''
    };

    emailErr = '';
    passwordErr = '';

    ngOnInit() {

    }

    validateEmail(email) {
      const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      return re.test(email);
    }

    onSignin() {
      this.emailErr = '';
      if (!this.user.email || !this.validateEmail(this.user.email)) {
        this.emailErr = 'Email is not valid';
      }
      this.passwordErr = '';
      if (!this.user.password) {
        this.passwordErr = 'Password is not valid';
      }

      if (this.emailErr || this.passwordErr) {
        return;
      }

      if (this.user.email === 'user@gmail.com' && this.user.password === '123456') {

      } else if (this.user.email === 'staff@gmail.com' && this.user.password === '123456') {

      } else if (this.user.email === 'leader@gmail.com' && this.user.password === '123456') {

      } else {
        this.emailErr = 'Email/Password is not correct';
        this.passwordErr = '';
        return;
      }

      this.passwordErr = '';
      this.emailErr = '';

      window.location.href = 'newsfeed';
    }
}
