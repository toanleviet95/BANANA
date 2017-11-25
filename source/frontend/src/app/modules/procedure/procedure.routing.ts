import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProcedureContentComponent } from './components/procedure-content/procedure-content.component';
import { ProcedureSubmitComponent } from './components/procedure-submit/procedure-submit.component';
import { ProcedureSearchComponent } from './components/procedure-search/procedure-search.component';

const routes: Routes = [
    {
        path: '',
        component: ProcedureContentComponent
    },
    {
        path: 'submit',
        component: ProcedureSubmitComponent
    },
    {
        path: 'search',
        component: ProcedureSearchComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProcedureRoutingModule {}
