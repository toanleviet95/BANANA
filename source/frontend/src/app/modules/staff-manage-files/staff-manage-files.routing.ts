import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StaffManageFilesContentComponent } from './components/staff-manage-files-content/staff-manage-files-content.component';

const routes: Routes = [
    {
        path: '',
        component: StaffManageFilesContentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StaffManageFilesRoutingModule {}
