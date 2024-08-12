import React, { useRef, useState } from 'react';

const RealTimeValidationForm = () => {
  const inputRef = useRef(null);
  const [isValid, setIsValid] = useState(true);
  const minLength = 5;

  const handleInputChange = () => {
    const value = inputRef.current.value;
    setIsValid(value.length >= minLength);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Minimum 5 characters"
        onChange={handleInputChange}
        style={{ borderColor: isValid ? 'green' : 'red' }}
      />
      {!isValid && <p style={{ color: 'red' }}>Input must be at least {minLength} characters long.</p>}
    </div>
  );
};

export default RealTimeValidationForm;
