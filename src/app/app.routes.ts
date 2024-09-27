import { Routes } from '@angular/router';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/task-list', pathMatch: 'full' },
  { path: 'task-list', component: TaskListComponent },
  { path: 'task/:id', component: TaskPageComponent }
];