import { MouseEventHandler, useRef } from 'react';
import { Project } from '../__models__/project.model';
import Button from './Button';
import Input from './Input';

interface ProjectFormProps {
  onCancel: MouseEventHandler<HTMLButtonElement>;
  onSave: CallableFunction;
}

const ProjectForm = ({ onCancel, onSave }: ProjectFormProps) => {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const dueDate = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    if (!title.current || !description.current || !dueDate.current) return;

    const project: Project = {
      title: title.current?.value,
      description: description.current?.value,
      dueDate: dueDate.current?.value
    };

    onSave(project);
  };

  return (
    <section className="flex justify-center items-center gap-5 h-full w-full text-stone-900 ">
      <form className="flex flex-col gap-10 h-2/4 w-2/4">
        <Input label="title" ref={title} type="text" />
        <Input label="description" ref={description} customType="textarea" />
        <Input label="due date" ref={dueDate} type="date" />
        <div className="flex justify-end gap-5">
          <Button btnType="neutral" onClick={onCancel}>
            Cancel
          </Button>
          <Button btnType="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ProjectForm;
