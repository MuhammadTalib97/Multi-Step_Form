import React from "react";
import { num_of_pasges } from "../constant/index";

const PageWrapper = (props) => {
  const { pageHandler, pageNumber, submitHandler } = props;
  return (
    <div className="col-12">
      {pageNumber > 0 ? (
        <button
          className="btn btn-danger"
          onClick={() => {
            pageHandler("prev");
          }}
        >
          Prev
        </button>
      ) : null}
      {pageNumber < num_of_pasges && (
        <button
          className="btn btn-danger btn1"
          onClick={() => {
            pageHandler("next");
          }}
        >
          Next
        </button>
      )}
      {/* subHandler  btn*/}
      {pageNumber === num_of_pasges && (
        <button
          className="btn btn-success btn1"
          onClick={() => {
            submitHandler();
          }}
        >
          submit
        </button>
      )}
    </div>
  );
};

export default PageWrapper;

let obj = {
  // user: {
  //   username: "somenasme",
  //   age: "someage",
  //   address: { first: "", second: "", city: { zip: "", name: "" } },
  // },
  // user1: {
  //     username: "somenasme",
  //     age: "someage",
  //     address: { first: "", second: "", city: { zip: "", name: "" } },
  //   },
};

// const {user:{address:{city:{zip}}}={}}=obj;
// const zip=obj.address &&obj.address.city &&obj.address.city.zip;
// const {user:{address:{city:{zip}={}}={}}={}}=obj
