import { ComponentPropsWithRef } from 'react';

interface InputGroupProps {
  label: string;
  invalid: boolean;
}

type inputGroupProps = InputGroupProps & ComponentPropsWithRef<'input'>;

export default function InputGroup({ label, invalid, ...props }: inputGroupProps) {
  const validInput = 'border-stone-200 bg-stone-200 text-stone-800';
  const invalidInput = 'text-red-800 border-red-800 bg-red-200';

  return (
    <div className="flex flex-col">
      <label className={`mb-2 text-xs font-bold uppercase ${invalid ? 'text-red-800' : 'text-stone-200'}`}>
        {label}
      </label>
      <input className={`py-3 px-4 leading-6 rounded shadow-md ${invalid ? invalidInput : validInput}`} {...props} />
    </div>
  );
}
