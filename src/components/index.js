import React from "react";
import SelectHelperComponent from "./SelectHelperComponent";

const FormInputWrapper = (props) => {
  // console.log(props);
  const {
    name = "",
    showLeftPane = false,
    type = "text",
    handlechange,
    value = "",
    hideLabel,
  } = props;
  const nameInUpper = name.toUpperCase();
  return (
    <div className="col-md-4">
      {!hideLabel && (
        <label
          htmlFor={`validationDefault${nameInUpper}`}
          className="form-label"
        >
          {nameInUpper}
        </label>
      )}
      <div className="input-group">
        {showLeftPane && (
          <span className="input-group-text" id="inputGroupPrepend2">
            @
          </span>
        )}
        <input
          type={type || "text"}
          className="form-control"
          id={`validationDefault${nameInUpper}`}
          name={name}
          aria-describedby="inputGroupPrepend2"
          onChange={handlechange}
          value={value || ""}
          required
          placeholder={`Please Enter ${name}`}
        />
      </div>
    </div>
  );
};

export default FormInputWrapper;
