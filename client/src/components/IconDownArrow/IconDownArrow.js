import React from "react";
import "./IconDownArrow.css";

<<<<<<< HEAD
const IconDownArrow = props => {
=======
const IconDownArrow = (props) => {


>>>>>>> 7e89e8f02b4852e6e77632e576491650430180f3
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
>>>>>>> 7e89e8f02b4852e6e77632e576491650430180f3

  return (
    <div className={classList.join(" ")}>
      <div>
<<<<<<< HEAD
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          &#9660;
        </div>
=======
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>&#9660;</div>
>>>>>>> 7e89e8f02b4852e6e77632e576491650430180f3
      </div>
    </div>
  );
};

export default IconDownArrow;
