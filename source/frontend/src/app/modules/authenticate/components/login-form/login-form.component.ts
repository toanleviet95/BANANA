import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cookies } from 'js-cookie';

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
        Cookies.set('email', 'user@gmail.com');
        Cookies.set('role', '1');
      } else if (this.user.email === 'staff@gmail.com' && this.user.password === '123456') {
        Cookies.set('email', 'staff@gmail.com');
        Cookies.set('role', '2');
      } else if (this.user.email === 'leader@gmail.com' && this.user.password === '123456') {
        Cookies.set('email', 'leader@gmail.com');
        Cookies.set('role', '3');
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
