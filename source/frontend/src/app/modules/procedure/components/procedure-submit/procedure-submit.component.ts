import { Component, OnInit } from '@angular/core';
declare var jquery;
declare var $;

@Component ({
    templateUrl: './procedure-submit.component.html'
})

export class ProcedureSubmitComponent implements OnInit {
  step = 1;
  ngOnInit() {

  }
  Next() {
    this.step++;
    if (this.step === 5) {
      this.step = 1;
    }
  }

  Prev() {
    this.step--;
    if (this.step === 0) {
      this.step = 1;
    }
  }
}
