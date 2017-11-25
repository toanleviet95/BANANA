import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StaffExecuteFileRoutingModule } from './staff-execute-file.routing';

import { StaffExecuteFileContentComponent } from './components/staff-execute-file-content/staff-execute-file-content.component';
import { StaffExecuteLeftSideBarComponent } from './components/staff-execute-left-side-bar/staff-execute-left-side-bar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StaffExecuteFileRoutingModule
    ],
    declarations: [
        StaffExecuteLeftSideBarComponent,
        StaffExecuteFileContentComponent
    ],
    providers: []
})

export class StaffExecuteFileModule { }
