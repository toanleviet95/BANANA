import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component ({
    selector: 'app-complain-left-side-bar',
    templateUrl: './complain-left-side-bar.component.html'
})

@NgModule({
  imports: [
    RouterModule
  ],
  exports: []
})

export class ComplainLeftSideBarComponent implements OnInit {
    ngOnInit() {

    }
}
