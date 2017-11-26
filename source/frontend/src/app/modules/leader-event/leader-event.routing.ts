import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeaderEventContentComponent } from './components/leader-event-content/leader-event-content.component';

const routes: Routes = [
    {
        path: '',
        component: LeaderEventContentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LeaderEventRoutingModule {}
