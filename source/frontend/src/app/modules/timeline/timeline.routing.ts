import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimelineContentComponent } from './components/timeline-content/timeline-content.component';
import { TimelineAboutComponent } from './components/timeline-about/timeline-about.component';
import { TimelineFriendsComponent } from './components/timeline-friends/timeline-friends.component';
import { TimelineAlbumComponent } from './components/timeline-album/timeline-album.component';
import { TimelineProfileInfoComponent } from './components/timeline-profile-info/timeline-profile-info.component';
import { TimelineProfileInterestsComponent } from './components/timeline-profile-interests/timeline-profile-interests.component';
import { TimelineProfilePasswordComponent } from './components/timeline-profile-password/timeline-profile-password.component';
import { TimelineProfileJobsComponent } from './components/timeline-profile-jobs/timeline-profile-jobs.component';
import { TimelineProfileSettingsComponent } from './components/timeline-profile-settings/timeline-profile-settings.component';

const routes: Routes = [
    {
        path: '',
        component: TimelineContentComponent
    },
    {
        path: 'about',
        component: TimelineAboutComponent
    },
    {
      path: 'friends',
      component: TimelineFriendsComponent
    },
    {
      path: 'album',
      component: TimelineAlbumComponent
    },
    {
      path: 'edit-profile-info',
      component: TimelineProfileInfoComponent
    },
    {
      path: 'edit-profile-interests',
      component: TimelineProfileInterestsComponent
    },
    {
      path: 'edit-profile-password',
      component: TimelineProfilePasswordComponent
    },
    {
      path: 'edit-profile-jobs',
      component: TimelineProfileJobsComponent
    },
    {
      path: 'edit-profile-settings',
      component: TimelineProfileSettingsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TimelineRoutingModule {}
