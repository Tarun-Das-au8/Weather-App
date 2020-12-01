import React from "react";
import "../styles/FormStyle.css";

const Form = (props) => {
  return (
    <div className="container h-100">
      <h3 className="heading">Weather App</h3>
      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button className="btn btn-info">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const error = (props) => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please fill the blank...!
    </div>
  );
};

export default Form;
