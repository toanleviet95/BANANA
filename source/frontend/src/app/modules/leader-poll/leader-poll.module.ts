import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeaderPollRoutingModule } from './leader-poll.routing';

import { LeaderPollContentComponent } from './components/leader-poll-content/leader-poll-content.component';
import { LeaderPollLeftSideBarComponent } from './components/leader-poll-left-side-bar/leader-poll-left-side-bar.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LeaderPollRoutingModule
    ],
    declarations: [
        LeaderPollContentComponent,
        LeaderPollLeftSideBarComponent
    ],
    providers: []
})

export class LeaderPollModule { }
