import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsfeedRoutingModule } from './newsfeed.routing';

import { NewsfeedContentComponent } from './components/newsfeed-content/newsfeed-content.component';
import { NewsfeedNotiBarComponent } from './components/newsfeed-noti-bar/newsfeed-noti-bar.component';
import { NewsfeedEventBarComponent } from './components/newsfeed-event-bar/newsfeed-event-bar.component';
import { NewsfeedAccountBarComponent } from './components/newsfeed-account-bar/newsfeed-account-bar.component';
import { NewsfeedOnlineBarComponent } from './components/newsfeed-online-bar/newsfeed-online-bar.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NewsfeedRoutingModule
    ],
    declarations: [
      NewsfeedOnlineBarComponent,
      NewsfeedEventBarComponent,
      NewsfeedNotiBarComponent,
      NewsfeedAccountBarComponent,
      NewsfeedContentComponent
    ],
    providers: []
})

export class NewsfeedModule { }
