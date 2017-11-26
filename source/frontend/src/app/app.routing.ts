import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'authenticate',
      pathMatch: 'full'
    },
    {
        path: 'authenticate',
        component: LoginLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: './modules/authenticate/authenticate.module#AuthenticateModule'
          }
        ]
    },
    {
      path: 'newsfeed',
      component: CommonLayoutComponent,
      children: [
        {
          path: '',
          loadChildren: './modules/newsfeed/newsfeed.module#NewsfeedModule'
        }
      ]
    },
    {
      path: 'timeline',
      component: CommonLayoutComponent,
      children: [
        {
          path: '',
          loadChildren: './modules/timeline/timeline.module#TimelineModule'
        }
      ]
    },
    {
      path: 'complain',
      component: CommonLayoutComponent,
      children: [
        {
          path: '',
          loadChildren: './modules/complain/complain.module#ComplainModule'
        }
      ]
    },
    {
      path: 'procedure',
      component: CommonLayoutComponent,
      children: [
        {
          path: '',
          loadChildren: './modules/procedure/procedure.module#ProcedureModule'
        }
      ]
    },
    {
      path: 'messenger',
      component: CommonLayoutComponent,
      children: [
        {
          path: '',
          loadChildren: './modules/messenger/messenger.module#MessengerModule'
        }
      ]
    },
    {
      path: 'staff/manage',
      component: CommonLayoutComponent,
      children: [
        {
          path: '',
          loadChildren: './modules/staff-manage-files/staff-manage-files.module#StaffManageFilesModule'
        }
      ]
    },
    {
      path: 'staff/execute',
      component: CommonLayoutComponent,
      children: [
        {
          path: '',
          loadChildren: './modules/staff-execute-file/staff-execute-file.module#StaffExecuteFileModule'
        }
      ]
    },
    {
      path: 'leader/poll',
      component: CommonLayoutComponent,
      children: [
        {
          path: '',
          loadChildren: './modules/leader-poll/leader-poll.module#LeaderPollModule'
        }
      ]
    },
    {
      path: 'leader/announcement',
      component: CommonLayoutComponent,
      children: [
        {
          path: '',
          loadChildren: './modules/leader-announcement/leader-announcement.module#LeaderAnnouncementModule'
        }
      ]
    },
    {
      path: 'leader/event',
      component: CommonLayoutComponent,
      children: [
        {
          path: '',
          loadChildren: './modules/leader-event/leader-event.module#LeaderEventModule'
        }
      ]
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
