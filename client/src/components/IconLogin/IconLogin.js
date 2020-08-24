import React from 'react';
import "./IconLogin.css";
// import nav_user_login from "../../assets/images/nav_user_login.png"
import "../../index.css"


// Function based React Component
const IconLogin = (props) => {

  // Default Class to apply to Component
  let classList = `IconLogin`;



  return (
    <div className={classList}>
      <div className="img" style={{ backgroundImage: props.image, height: "40px" }}></div>
    </div>

  );
}

export default IconLogin;