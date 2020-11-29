import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LIST_ROUTE } from './containers/list/list.page.route';

const routes: Routes = [LIST_ROUTE];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
