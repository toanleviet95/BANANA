import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProcedureRoutingModule } from './procedure.routing';

import { ProcedureContentComponent } from './components/procedure-content/procedure-content.component';
import { ProcedureSubmitComponent } from './components/procedure-submit/procedure-submit.component';
import { ProcedureLeftSideBarComponent } from './components/procedure-left-side-bar/procedure-left-side-bar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProcedureRoutingModule
    ],
    declarations: [
      ProcedureLeftSideBarComponent,
      ProcedureContentComponent,
      ProcedureSubmitComponent
    ],
    providers: []
})

export class ProcedureModule { }
