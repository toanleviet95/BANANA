import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessengerContentComponent } from './components/messenger-content/messenger-content.component';

const routes: Routes = [
    {
        path: '',
        component: MessengerContentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MessngerRoutingModule {}
