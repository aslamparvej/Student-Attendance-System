import React from "react";
import { Link } from "react-router-dom";

import "./UICustomCSS.css";

const ModalForm = (props) => {
  console.log(props);
  return (
    <div className="modal-container" id="modalContainer">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div>
              <h2 className="modal-title">{props.formTitle}</h2>
            </div>
            <div>
              <Link to={props.parentRoute}>
                <button className="custom-btn custom-black-btn">Close</button>
              </Link>
            </div>
          </div>
          <div className="modal-body">
            <form className="custom-form" action={props.actions} method="POST" >
              {props.formDetails.map((item, key) => (
                <div className="custom-input-group" key={key}>
                  <label htmlFor="" className="custom-input-label">{item['input-field-label']}</label>
                  <input type={item['input-field-type']} className="custom-input-input" name="" id="" placeholder={item['input-field-placeholder']}/>
                </div>
              ))}
            </form>
          </div>
          <div className="modal-footer">
            <button type="submit" className="custom-btn custom-primary-btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
