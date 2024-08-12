import { useState } from 'react';
import InputGroup from './InputGroup';

export default function Authentication() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier: string, value: string) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div className="w-100 max-w-md p-8 my-0 mx-auto rounded-lg shadow-sm bg-stone-800">
      <div className="flex flex-col gap-3 mb-6">
        <InputGroup
          invalid={emailNotValid}
          label="Email"
          onChange={(event) => handleInputChange('email', event.target.value)}
          type="email"
        />
        <InputGroup
          invalid={passwordNotValid}
          label="Password"
          onChange={(event) => handleInputChange('password', event.target.value)}
          type="password"
        />
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="px-4 py-2 font-600 uppercase rounded text-amber-400 hover:text-amber-600">
          Create a new account
        </button>
        <button
          type="button"
          className="px-4 py-2 font-600 uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-600"
          onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
