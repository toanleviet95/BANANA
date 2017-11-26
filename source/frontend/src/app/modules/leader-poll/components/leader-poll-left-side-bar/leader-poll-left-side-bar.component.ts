import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component ({
    selector: 'app-leader-poll-left-side-bar',
    templateUrl: './leader-poll-left-side-bar.component.html'
})

@NgModule({
  imports: [
    RouterModule
  ],
  exports: []
})

export class LeaderPollLeftSideBarComponent implements OnInit {
    ngOnInit() {

    }
}
