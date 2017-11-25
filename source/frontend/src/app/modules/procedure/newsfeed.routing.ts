import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsfeedContentComponent } from './components/newsfeed-content/newsfeed-content.component';

const routes: Routes = [
    {
        path: '',
        component: NewsfeedContentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NewsfeedRoutingModule {}
