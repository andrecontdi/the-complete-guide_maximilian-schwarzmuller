import { Task } from '../__models__/task.model';
import Button from './Button';
import Input from './Input';
import List from './List';

interface TasksProps {
  tasks: Task[];
}

const Tasks = ({ tasks }: TasksProps) => {
  return (
    <>
      <form className="flex items-end gap-10 w-full">
        <Input label="Task" type="text" />
        <Button btnType="neutral">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </Button>
      </form>
      {tasks && tasks.length > 0 && <List location="tasks" list={tasks} />}
    </>
  );
};

export default Tasks;
