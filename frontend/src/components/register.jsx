import React, { useState } from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import "./login.css";
export default function Register() {
  const [email, setEmail] = useState("");
  const [vemail, setvEmail] = useState(null);

  function emailhandler(e) {
      setEmail(e.target.value)
    if (validator.isEmail(email)) {
      setvEmail(false);
    } else {
      setvEmail(true);
    }
  }
  return (
    <div className="register">
      <nav>
        <span>have an account?</span>
        <Link to="/login">login</Link>
      </nav>
      <form>
        <input
          placeholder="email"
          className={vemail ? "email-green" : "email-red"}
          onChange={(e) => emailhandler(e)}
        ></input>
        <input placeholder="password" type="password"></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
