import React, { useRef } from 'react';

const DynamicForm = () => {
  const inputRefs = useRef([]);

  const handleFocus = (index) => {
    inputRefs.current[index]?.focus();
  };

  return (
    <div>
      {['First Name', 'Last Name', 'Email'].map((label, index) => (
        <div key={index}>
          <label>{label}</label>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            onClick={() => handleFocus(index)}
            onKeyDown={(e) => e.key === 'Tab' && handleFocus(index + 1)}
            placeholder={`Enter ${label.toLowerCase()}`}
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicForm;
