import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="form-group">
        <label for="formGroupExampleInput">{labelName}</label>
        {isSurpriseMe && (
          <span onClick={handleSurpriseMe} class="badge badge-warning p-1">
            Surprise Me
          </span>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default FormField;
