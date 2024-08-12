import { MouseEventHandler } from 'react';
import { Project } from '../__models__/project.model';
import Button from './Button';
import Tasks from './Tasks';

interface ProjectDetailProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
  project: Project;
}

const ProjectDetail = ({ onClose, project }: ProjectDetailProps) => {
  const { title, description, dueDate, tasks } = project;

  return (
    <section className="flex flex-col items-center gap-5 mt-10 w-full text-stone-900">
      <div className="flex justify-end w-2/4">
        <Button btnType="neutral" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Button>
      </div>
      <div className="flex flex-col gap-5 w-2/4">
        <h1 className="uppercase text-lg font-bold">Title</h1>
        <p>{title}</p>
        <h1 className="uppercase text-lg font-bold">Description</h1>
        <p>{description}</p>
        <h1 className="uppercase text-lg font-bold">Due Date</h1>
        <p>{dueDate}</p>
        <div className="flex justify-end gap-5">
          <Button btnType="neutral">Remove</Button>
          <Button btnType="primary">Completed</Button>
        </div>
        <Tasks tasks={tasks} />
      </div>
    </section>
  );
};

export default ProjectDetail;
