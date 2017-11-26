import { Component, OnInit } from '@angular/core';

@Component ({
    selector: 'app-newsfeed-event-bar',
    templateUrl: './newsfeed-event-bar.component.html'
})

export class NewsfeedEventBarComponent implements OnInit {
    arrEvents = [];
    ngOnInit() {
      this.arrEvents = [
        {
          content: 'Họp tổ dân phố',
          date: '20/11/2017'
        },
        {
          content: 'Họp khu phố 4',
          date: '22/11/2017'
        }
      ];
    }
}
