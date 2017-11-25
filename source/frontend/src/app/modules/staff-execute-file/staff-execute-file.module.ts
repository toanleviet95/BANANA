import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StaffExecuteFileRoutingModule } from './staff-execute-file.routing';

import { StaffExecuteFileContentComponent } from './components/staff-execute-file-content/staff-execute-file-content.component';
import { LeftSideBarComponent } from '../../shared/components/left-side-bar/left-side-bar.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StaffExecuteFileRoutingModule
    ],
    declarations: [
      StaffExecuteFileContentComponent,
      LeftSideBarComponent
    ],
    providers: []
})

export class StaffExecuteFileModule { }
