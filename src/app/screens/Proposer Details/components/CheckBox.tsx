import React, { useState } from "react";

function CheckBox() {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, text: "I declare that the nominee is of 18 years of age", checked: false },
    { id: 2, text: "I hereby declare that information provided above is true, and I accept all Terms & Conditions", checked: false },
    { id: 3, text: "I hereby consent to receive information from Central KYC Registry through SMS/email on the...Read More", checked: false }
  ]);

  const handleCheckboxChange = (id: any) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
    );
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div className="p-4">
      {checkboxes.map((checkbox) => (
        <div key={checkbox.id} className="flex items-center my-8">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600"
            checked={checkbox.checked}
            onChange={() => handleCheckboxChange(checkbox.id)}
          />
          <span className="ml-2 text-xl">{checkbox.text}</span>
        </div>
      ))}
    </div>
  );
}

export default CheckBox;
