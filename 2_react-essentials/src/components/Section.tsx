import { ReactNode } from 'react';

interface SectionProps {
  children?: ReactNode;
  title: string;
}

export default function Section({ children, title, ...props }: SectionProps) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
