import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component ({
    selector: 'app-staff-manage-files-left-side-bar',
    templateUrl: './staff-manage-files-left-side-bar.component.html'
})

@NgModule({
  imports: [
    RouterModule
  ],
  exports: []
})

export class StaffManageFilesLeftSideBarComponent implements OnInit {
    ngOnInit() {

    }
}
