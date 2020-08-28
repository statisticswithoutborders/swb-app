import React from "react";
import "./IconDownArrow.css";

<<<<<<< HEAD
const IconDownArrow = props => {
=======
const IconDownArrow = (props) => {


>>>>>>> 38b768dd4b4ee311d76d46dfd6eef5b1f54649bb
  let classList = [`IconDownArrow`];
  if (props.arrowUp) {
    classList.push("IconDownArrow-up");
  }

  const handleClick = () => {
<<<<<<< HEAD
    props.callBack();
  };
=======
    props.callBack()
  }
>>>>>>> 38b768dd4b4ee311d76d46dfd6eef5b1f54649bb

  return (
    <div className={classList.join(" ")}>
      <div>
<<<<<<< HEAD
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          &#9660;
        </div>
=======
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>&#9660;</div>
>>>>>>> 38b768dd4b4ee311d76d46dfd6eef5b1f54649bb
      </div>
    </div>
  );
};

export default IconDownArrow;
