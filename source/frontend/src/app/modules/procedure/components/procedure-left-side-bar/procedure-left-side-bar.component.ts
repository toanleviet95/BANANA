import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component ({
    selector: 'app-procedure-left-side-bar',
    templateUrl: './procedure-left-side-bar.component.html'
})

@NgModule({
  imports: [
    RouterModule
  ],
  exports: []
})

export class ProcedureLeftSideBarComponent implements OnInit {
    ngOnInit() {

    }
}
