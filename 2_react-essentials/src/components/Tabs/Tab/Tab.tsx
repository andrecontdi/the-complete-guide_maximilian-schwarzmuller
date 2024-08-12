import { MouseEventHandler, ReactNode } from 'react';
import './Tab.css';

interface TabProps {
  children?: ReactNode;
  isSelected: boolean;
  onSelect: MouseEventHandler<HTMLButtonElement>;
}

export default function Tab({ children, isSelected, ...props }: TabProps) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
