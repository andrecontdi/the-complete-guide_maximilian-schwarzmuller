import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Project } from '../__models__/project.model';
import { Task } from '../__models__/task.model';

export type ListItemType = Project | Task;

interface ListItemProps extends ComponentPropsWithoutRef<'li'> {
  listItem: ListItemType;
  location: string;
}

const ListItem = ({ listItem, location, ...props }: ListItemProps) => {
  const getStyles = (): string => {
    switch (location) {
      case 'tasks':
        return 'bg-stone-50 hover:bg-stone-100';
      default:
        return 'hover:bg-stone-900 text-stone-50';
    }
  };

  const getIcon = (): ReactNode => {
    switch (location) {
      case 'tasks':
        return (
          <>
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
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
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
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </>
        );
      default:
        return (
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
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        );
    }
  };

  return (
    <li
      className={`flex justify-between align-center px-5 py-2 rounded-xl hover:bg-stone-100 cursor-pointer ${getStyles()}`}
      {...props}>
      {listItem.title}
      <div className="flex gap-2">{getIcon()}</div>
    </li>
  );
};

export default ListItem;
