import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './components/login-form/login-form.component';
import {  LoginService } from './services/login.service';
import { AuthenticateRoutingModule } from './authenticate.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthenticateRoutingModule
    ],
    declarations: [
        LoginFormComponent
    ],
    providers: [
        LoginService
    ]
})

export class AuthenticateModule { }
