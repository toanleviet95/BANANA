import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component ({
    selector: 'app-newsfeed-left-side-bar',
    templateUrl: './newsfeed-left-side-bar.component.html'
})

@NgModule({
  imports: [
    RouterModule
  ],
  exports: []
})

export class NewsfeedLeftSideBarComponent implements OnInit {
    ngOnInit() {

    }
}
