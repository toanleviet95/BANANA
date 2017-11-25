import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'newsfeed',
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
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
