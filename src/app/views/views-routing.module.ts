import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsComponent } from './views/views.component';
import { GuardService } from '../services/auth/guard.service';

export const routes: Routes = [

{
  path: 'home',
  component: ViewsComponent,
  canActivate: [GuardService],

  children: [
    { path: 'create',
      loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
    },
    { path: 'list',
      loadChildren: () => import('./list/list.module').then(m => m.ListModule)
    },
    { path: 'detail',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
    }
  ]
}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class ViewsRoutingModule { }
