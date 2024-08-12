import { FormEventHandler, forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ResultModalProps {
  onReset: FormEventHandler<HTMLFormElement>;
  remainingTime?: number;
  targetTime: number;
}

export type ResultModalRef = { open: () => void };

const ResultModal = forwardRef<{ open: () => void }, ResultModalProps>(
  ({ onReset, remainingTime = 0, targetTime }, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
      open() {
        dialog.current?.showModal();
      }
    }));

    return createPortal(
      <dialog className="result-modal" ref={dialog}>
        <h2>Your {remainingTime <= 0 ? 'lost' : 'win'}</h2>
        <p>
          The target time was:{' '}
          <strong>
            {targetTime} second{targetTime > 1 ? 's' : ''}
          </strong>
        </p>
        {remainingTime > 0 && (
          <p>
            Yout stopped the timer with{' '}
            <strong>
              {remainingTime / 1000} second{remainingTime > 1 ? 's' : ''} left
            </strong>
          </p>
        )}
        <form method="dialog" onClick={onReset}>
          <button>Close</button>
        </form>
      </dialog>,
      document.getElementById('modal')!
    );
  }
);

export default ResultModal;
