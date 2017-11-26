import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeaderPollContentComponent } from './components/leader-poll-content/leader-poll-content.component';

const routes: Routes = [
    {
        path: '',
        component: LeaderPollContentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LeaderPollRoutingModule {}
