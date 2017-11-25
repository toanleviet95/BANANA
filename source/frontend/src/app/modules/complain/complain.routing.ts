import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComplainComponent } from './components/complain/complain.component';

const routes: Routes = [
    {
        path: '',
        component: ComplainComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ComplainRoutingModule {}
