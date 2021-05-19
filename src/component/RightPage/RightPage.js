import React from "react";
import RightPageCss from "./RightPage.module.css";

const rightPage = (props) => {
  return (
    <div className={RightPageCss.RightPage}>
      <p>{props.list.input}</p>
      <img src={props.list.image} alt="Vegetables" />
      <button onClick={props.disable}>
        <strong>X</strong>
      </button>
    </div>
  );
};

export default rightPage;
