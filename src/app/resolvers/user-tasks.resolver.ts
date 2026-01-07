import { ResolveFn } from '@angular/router';
import { Task } from '../tasks/task/task.model';
import { inject } from '@angular/core';
import { TasksService } from '../tasks/tasks.service';

export const userTasksResolver: ResolveFn<Task[]> = (route, state) => {
  const order = route.queryParams['order'];
  const tasksService = inject(TasksService);
  const tasks = tasksService
    .allTasks()
    .filter(
      (task) => task.userId === route.paramMap.get('userId')
    );

  if (order && order === 'asc') {
    tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
  }

  return tasks.length ? tasks : [];
};
