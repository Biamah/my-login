import React from "react";
import './input-email.css'

const InputEmail = ({title}) => {
    return ( <input type="text" className="input-email" placeholder={title} /> );
}
 
export default InputEmail;