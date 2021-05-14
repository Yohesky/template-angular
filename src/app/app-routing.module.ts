import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ViewsRoutingModule } from './views/views-routing.module';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ViewsRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
