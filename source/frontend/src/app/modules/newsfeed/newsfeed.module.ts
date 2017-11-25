import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsfeedRoutingModule } from './newsfeed.routing';

import { NewsfeedContentComponent } from './components/newsfeed-content/newsfeed-content.component';
import { NewsfeedNotiBarComponent } from './components/newsfeed-noti-bar/newsfeed-noti-bar.component';
import { NewsfeedEventBarComponent } from './components/newsfeed-event-bar/newsfeed-event-bar.component';
import { LeftSideBarComponent } from '../../shared/components/left-side-bar/left-side-bar.component';
import { OnlineBarComponent } from '../../shared/components/online-bar/online-bar.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NewsfeedRoutingModule
    ],
    declarations: [
      OnlineBarComponent,
      NewsfeedEventBarComponent,
      NewsfeedNotiBarComponent,
      LeftSideBarComponent,
      NewsfeedContentComponent
    ],
    providers: []
})

export class NewsfeedModule { }
