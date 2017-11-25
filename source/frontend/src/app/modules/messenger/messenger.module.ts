import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessengerContentComponent } from './components/messenger-content/messenger-content.component';
import { MessngerRoutingModule } from './messenger.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MessngerRoutingModule
    ],
    declarations: [
      MessengerContentComponent
    ],
    providers: []
})

export class MessengerModule { }
