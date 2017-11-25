import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProcedureRoutingModule } from './procedure.routing';

import { ProcedureContentComponent } from './components/procedure-content/procedure-content.component';
import { ProcedureSubmitComponent } from './components/procedure-submit/procedure-submit.component';
import { ProcedureSearchComponent } from './components/procedure-search/procedure-search.component';
import { LeftSideBarComponent } from '../../shared/components/left-side-bar/left-side-bar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProcedureRoutingModule
    ],
    declarations: [
      ProcedureContentComponent,
      ProcedureSubmitComponent,
      ProcedureSearchComponent,
      LeftSideBarComponent
    ],
    providers: []
})

export class ProcedureModule { }
