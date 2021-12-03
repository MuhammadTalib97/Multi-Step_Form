import React, { useState, useEffect } from "react";
import { form_data, num_of_pasges, page_names } from "../constant/index";
import FormInputWrapper from "./index";
import PageWrapper from "./PageWrapper";
import swal from "sweetalert";
import SelectHelperComponent from "./SelectHelperComponent";

const Form1 = () => {
  const [state, setState] = useState({});
  const [pageNumber, setPageNumber] = useState(0);

  const handlechange = (event) => {
    const {
      target: { value, name },
    } = event;
    console.log(event);
    setState({ ...state, [name]: value });
  };
  const submitHandler = () => {
    console.log(state);

    swal({
      title: "Thank You!",
      text: "Your Response has been saved in our data base",
      icon: "success",
      button: "Close",
    });
  };
  let data = form_data[pageNumber];
  const pageHandler = (action) => {
    let page = pageNumber;
    if (action === "next") {
      page += 1;
    } else {
      page -= 1;
    }
    if (page > form_data.length - 1) {
      console.log("Error can't go ahead");
    } else if (page < 0) {
      console.log("Error can't go before");
    } else {
      setPageNumber(page);
    }
  };
  
  return (
    <>
      <div className="main">
        <h1>Form {pageNumber + 1}</h1>
        <div className="row g-3">
          {data.map((item, index) => {
            const value = state[item.name];
            if (item.type === "select") {
              return (
                <SelectHelperComponent
                  {...item}
                  value={value}
                  key={index}
                  handlechange={handlechange}
                />
              );
            }
            return (
              <FormInputWrapper
                handlechange={handlechange}
                key={index}
                value={value}
                {...item}
              />
            );
          })}
          <PageWrapper
            pageNumber={pageNumber}
            pageHandler={pageHandler}
            submitHandler={submitHandler}
          />
        </div>
      </div>
    </>
  );
};
export default Form1;
