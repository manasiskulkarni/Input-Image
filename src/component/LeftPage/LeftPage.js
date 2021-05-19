import React from "react";
import LeftPageCss from "./LeftPage.module.css";

const leftPage = (props) => {
  
  return (
    <div className={LeftPageCss.LeftPage}  >
        <label>Name</label>
        <br/>
        <input type="text" placeholder="Enter vegetable name" onChange={props.changed} />
        <br/>
        <label>Image Url</label>
        <br/>
        <input type="text" placeholder="Enter Vegetable Url" onChange={props.changedUrl} />
        <br/>
        <button onClick={props.submit} type="submit" disabled={props.disabled}>
          submit
        </button>
    </div>
  );
};

export default leftPage;
