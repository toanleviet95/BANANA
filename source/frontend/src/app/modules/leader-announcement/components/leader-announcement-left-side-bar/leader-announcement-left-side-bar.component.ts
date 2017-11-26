import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component ({
    selector: 'app-leader-announcement-left-side-bar',
    templateUrl: './leader-announcement-left-side-bar.component.html'
})

@NgModule({
  imports: [
    RouterModule
  ],
  exports: []
})

export class LeaderAnnouncementLeftSideBarComponent implements OnInit {
    ngOnInit() {

    }
}
