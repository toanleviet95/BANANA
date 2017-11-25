import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StaffManageFilesRoutingModule } from './staff-manage-files.routing';

import { StaffManageFilesContentComponent } from './components/staff-manage-files-content/staff-manage-files-content.component';
import { StaffManageFilesLeftSideBarComponent } from './components/staff-manage-files-left-side-bar/staff-manage-files-left-side-bar.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StaffManageFilesRoutingModule
    ],
    declarations: [
      StaffManageFilesLeftSideBarComponent,
      StaffManageFilesContentComponent
    ],
    providers: []
})

export class StaffManageFilesModule { }
