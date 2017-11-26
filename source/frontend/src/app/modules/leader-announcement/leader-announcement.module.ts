import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeaderAnnouncementRoutingModule } from './leader-announcement.routing';

import { LeaderAnnouncementContentComponent } from './components/leader-announcement-content/leader-announcement-content.component';
import { LeaderAnnouncementLeftSideBarComponent } from './components/leader-announcement-left-side-bar/leader-announcement-left-side-bar.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LeaderAnnouncementRoutingModule
    ],
    declarations: [
        LeaderAnnouncementContentComponent,
        LeaderAnnouncementLeftSideBarComponent
    ],
    providers: []
})

export class LeaderAnnouncementModule { }
