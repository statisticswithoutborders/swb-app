import React from 'react';
import "./IconLogin.css";
import "../../index.css"


const IconLogin = (props) => {


  let classList = `IconLogin`;

  return (
    <div className={classList}>
      <div className="img" style={{ backgroundImage: props.image, height: "40px" }}></div>
    </div>

  );
}

export default IconLogin;