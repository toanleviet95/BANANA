import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeaderAnnouncementContentComponent } from './components/leader-announcement-content/leader-announcement-content.component';

const routes: Routes = [
    {
        path: '',
        component: LeaderAnnouncementContentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LeaderAnnouncementRoutingModule {}
