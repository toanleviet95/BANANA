import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StaffExecuteFileContentComponent } from './components/staff-execute-file-content/staff-execute-file-content.component';

const routes: Routes = [
    {
        path: '',
        component: StaffExecuteFileContentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StaffExecuteFileRoutingModule {}
