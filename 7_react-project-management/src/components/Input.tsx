import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react';

type InputProps = {
  label: string;
} & (
  | ({
      customType?: 'input';
    } & ComponentPropsWithRef<'input'>)
  | ({
      customType?: 'textarea';
    } & ComponentPropsWithRef<'textarea'>)
);

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ label, customType = 'input', ...props }: InputProps, ref) => {
    const getInput = (): ReactNode => {
      return customType === 'textarea' ? (
        <textarea
          className="p-2 text-lg bg-stone-200 border-2 focus:border-4 active:border-4 border-b-stone-500"
          ref={ref}
          {...(props as ComponentPropsWithRef<'textarea'>)}
        />
      ) : (
        <input
          className="p-2 text-lg bg-stone-200 border-2 focus:border-4 active:border-4 border-b-stone-500"
          ref={ref}
          {...(props as ComponentPropsWithRef<'input'>)}
        />
      );
    };

    return (
      <div className="flex flex-col w-full">
        <label className="uppercase text-lg font-bold">{label}</label>
        {getInput()}
      </div>
    );
  }
);

export default Input;
