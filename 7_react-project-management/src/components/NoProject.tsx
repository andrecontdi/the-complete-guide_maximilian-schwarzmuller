import { MouseEventHandler } from 'react';
import Logo from '../../public/logo.png';
import Button from './Button';

interface NoProjectProps {
  onShowProjectFrom: MouseEventHandler<HTMLButtonElement>;
}

const NoProject = ({ onShowProjectFrom }: NoProjectProps) => {
  return (
    <section className="flex flex-col justify-center items-center gap-5 h-full w-full">
      <img className="w-24" src={Logo} />
      <h1 className="text-xl text-stone-900 font-bold">No Project Selected</h1>
      <p className="text-stone-500">Select a project or get started with a new one</p>
      <Button btnType="primary" onClick={onShowProjectFrom}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        Create New Project
      </Button>
    </section>
  );
};

export default NoProject;
