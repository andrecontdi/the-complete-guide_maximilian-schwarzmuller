import { Task } from './task.model';

export interface Project {
  title: string;
  description: string;
  dueDate: string;
  tasks?: Task[];
}
