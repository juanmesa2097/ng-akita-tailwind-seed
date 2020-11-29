import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListPage } from './containers/list/list.page';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [ListPage],
  imports: [CommonModule, TasksRoutingModule],
})
export class TasksModule {}
