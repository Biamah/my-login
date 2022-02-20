import React from "react";
import './input-password.css';
import { ReactComponent as EyeIcon } from '../../img/eye.svg'

const InputPassword = () => {
    return ( 
        <div>
            <input type="password" className="input-password" placeholder="Password" />
            <EyeIcon />
        </div> );
}
 
export default InputPassword;