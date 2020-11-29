import { ID } from '@datorama/akita';

export interface Task {
  id: ID;
  name: string;
  completed: boolean;
}
