import React, { useRef } from 'react';

const CustomFormSubmission = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    // Custom validation logic
    if (data.email.includes('@')) {
      console.log('Form Submitted:', data);
      // Proceed with form submission to the server
    } else {
      console.log('Invalid email address');
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input name="firstName" type="text" placeholder="First Name" required />
      </div>
      <div>
        <label>Last Name</label>
        <input name="lastName" type="text" placeholder="Last Name" required />
      </div>
      <div>
        <label>Email</label>
        <input name="email" type="email" placeholder="Email" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomFormSubmission;

