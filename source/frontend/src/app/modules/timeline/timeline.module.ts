import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimelineRoutingModule } from './timeline.routing';

import { TimelineCoverComponent } from './components/timeline-cover/timeline-cover.component';
import { TimelineContentComponent } from './components/timeline-content/timeline-content.component';
import { TimelineAboutComponent } from './components/timeline-about/timeline-about.component';
import { TimelineFriendsComponent } from './components/timeline-friends/timeline-friends.component';
import { TimelineAlbumComponent } from './components/timeline-album/timeline-album.component';
import { TimelineProfileInfoComponent } from './components/timeline-profile-info/timeline-profile-info.component';
import { TimelineProfileInterestsComponent } from './components/timeline-profile-interests/timeline-profile-interests.component';
import { TimelineProfilePasswordComponent } from './components/timeline-profile-password/timeline-profile-password.component';
import { TimelineProfileJobsComponent } from './components/timeline-profile-jobs/timeline-profile-jobs.component';
import { TimelineProfileSettingsComponent } from './components/timeline-profile-settings/timeline-profile-settings.component';
import { TimelineProfileSidebarComponent } from './components/timeline-profile-sidebar/timeline-profile-sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TimelineRoutingModule
    ],
    declarations: [
      TimelineCoverComponent,
      TimelineProfileSidebarComponent,
      TimelineContentComponent,
      TimelineAboutComponent,
      TimelineFriendsComponent,
      TimelineAlbumComponent,
      TimelineProfileInfoComponent,
      TimelineProfileInterestsComponent,
      TimelineProfilePasswordComponent,
      TimelineProfileJobsComponent,
      TimelineProfileSettingsComponent
    ],
    providers: []
})

export class TimelineModule { }
