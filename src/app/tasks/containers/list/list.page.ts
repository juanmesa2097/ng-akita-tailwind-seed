import { Component, OnInit } from '@angular/core';
import { Task, TasksQuery, TasksService } from '@app/tasks/state';

@Component({
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  tasks$ = this.tasksQuery.selectAll();

  constructor(
    private tasksService: TasksService,
    private tasksQuery: TasksQuery
  ) {}

  ngOnInit(): void {
    this.tasksService.get<Task[]>().subscribe();
  }
}
