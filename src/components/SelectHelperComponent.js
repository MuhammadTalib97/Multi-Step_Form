import React from "react";

const SelectHelperComponent = (props) => {
  const { name, type, handlechange, value, options, key } = props;
  const nameInUpper = name.toUpperCase();

  return (
    <>
      {/* <label htmlFor={`validationDefault${nameInUpper}`} className="form-label">
        {nameInUpper}
      </label> */}
      {/* <select
        className="select"
        name={name}
        type={type}
        id={key}
        value={value}
        onChange={handlechange}
        placeholder={name}
      >
        {options.map((e) => {
          return <option>{e}</option>;
        })}
      </select> */}

      <div class="col-md-3">
        <label for="validationDefault04" class="form-label" >
          {nameInUpper}
        </label>
        <select  type={type} class="form-select" id="validationDefault04" name={name} value={value} onChange={handlechange} id="select" required>
          <option key={key} selected disabled>
            {`select ${name}`}
          </option>

          {options.map((e) => {
            return <option>{e}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default SelectHelperComponent;
