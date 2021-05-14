import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views/views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ViewsComponent, CreateComponent, DetailComponent, ListComponent],
  exports: [ViewsComponent, CreateComponent, DetailComponent, ListComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class ViewsModule { }
