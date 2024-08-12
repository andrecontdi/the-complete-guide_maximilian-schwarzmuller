import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  btnType: string;
  children: ReactNode;
}

const Button = ({ btnType, children, ...props }: ButtonProps) => {
  const getStyles = (): string => {
    switch (btnType) {
      case 'secondary':
        return 'bg-stone-500 hover:bg-stone-700 text-stone-50';
      case 'neutral':
        return 'bg-stone-50 hover:bg-stone-200';
      default:
        return 'bg-stone-700 hover:bg-stone-900 text-stone-50';
    }
  };

  return (
    <button className={`flex gap-2 h-fit w-fit px-5 py-3 rounded-xl ${getStyles()}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
