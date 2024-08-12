import { MouseEventHandler } from 'react';
import { Project } from '../__models__/project.model';
import Button from './Button';
import List from './List';

interface SidebarProps {
  list: Project[];
  onOpen: CallableFunction;
  onShowProjectFrom: MouseEventHandler<HTMLButtonElement>;
}

const Sidebar = ({ list, onOpen, onShowProjectFrom }: SidebarProps) => {
  return (
    <aside className="flex flex-col gap-10 basis-1/4 h-full py-10 px-5 rounded-tr-xl text-stone-50 bg-stone-900 ">
      <h1 className="uppercase text-xl font-bold">Your Projects</h1>
      {list && list.length > 0 && <List list={list} location="sidebar" onOpen={onOpen} />}
      <Button btnType="secondary" onClick={onShowProjectFrom}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        Add Project
      </Button>
    </aside>
  );
};

export default Sidebar;
