import { ElementType, ReactNode } from 'react';

interface TabsProps {
  children: ReactNode;
  menu: ReactNode[];
  // Approach #1: prop with "standar name".
  // menuContainer: ElementType;
  // Approach #2: less code, using prop with custom component name format
  MenuContainer: ElementType;
}

// For props like "MenuContainer"
// Pass/use string names for built-in compoenents.
// Or pass/use function/class name for custom components.
export default function Tabs({ children, menu, MenuContainer = 'menu' }: TabsProps) {
  // Approach #1: prop with standar name shoul be mapped to custom component name format;
  // const MenuContainer = menuContainer;

  return (
    <>
      <MenuContainer>{menu}</MenuContainer>
      {children}
    </>
  );
}
