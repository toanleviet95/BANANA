import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './components/login-form/login-form.component';
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
    ]
})

export class AuthenticateModule { }
