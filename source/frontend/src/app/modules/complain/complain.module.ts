import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComplainRoutingModule } from './complain.routing';

import { ComplainComponent } from './components/complain/complain.component';
import { ComplainLeftSideBarComponent } from './components/complain-left-side-bar/complain-left-side-bar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ComplainRoutingModule
    ],
    declarations: [
        ComplainComponent,
        ComplainLeftSideBarComponent
    ],
    providers: []
})

export class ComplainModule { }
