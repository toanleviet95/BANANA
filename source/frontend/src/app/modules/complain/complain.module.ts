import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComplainRoutingModule } from './complain.routing';

import { ComplainComponent } from './components/complain/complain.component';
import { LeftSideBarComponent } from '../../shared/components/left-side-bar/left-side-bar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ComplainRoutingModule
    ],
    declarations: [
        ComplainComponent,
        LeftSideBarComponent
    ],
    providers: []
})

export class ComplainModule { }
