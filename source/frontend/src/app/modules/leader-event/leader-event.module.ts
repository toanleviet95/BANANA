import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeaderEventRoutingModule } from './leader-event.routing';

import { LeaderEventContentComponent } from './components/leader-event-content/leader-event-content.component';
import { LeaderPollLeftSideBarComponent } from './components/leader-poll-left-side-bar/leader-poll-left-side-bar.component';
import { LeaderEventDatetimePickerComponent } from './components/leader-event-datetime-picker/leader-event-datetime-picker.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LeaderEventRoutingModule
    ],
    declarations: [
        LeaderEventContentComponent,
        LeaderPollLeftSideBarComponent,
        LeaderEventDatetimePickerComponent
    ],
    providers: []
})

export class LeaderEventModule { }
