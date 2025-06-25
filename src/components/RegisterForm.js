import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { movieApi } from "../constants/axios";
import { userRequests } from "../constants/requests";

const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [message, setMessage] = useState("");

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    city: "",
    street: "",
  });

  const togglePassword = (event) => {
    event.preventDefault();
    setShowPass(!showPass);
  };

  const handleSubmit = async () => {
    if (!user.email || !user.password || !user.city || !user.street) {
      setMessage("Please fill all required fields");
    } else {
      try {
        await movieApi.post(userRequests.register, user);
        setMessage("Successfully registered");
      } catch (err) {
        setMessage(err.message);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="inputs-container">
        <div className="input-container">
          <label className="email">Email</label>
          <input
            type="text"
            className="email"
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value,
              })
            }
          ></input>
        </div>
      </div>
      <div className="inputs-container">
        <div className="input-container">
          <label className="email">Username</label>
          <input
            type="text"
            className="email"
            onChange={(e) =>
              setUser({
                ...user,
                username: e.target.value,
              })
            }
          ></input>
        </div>
      </div>
      <div className="input-container">
        <label className="password">Password</label>
        <input
          type={showPass ? "text" : "password"}
          className="password"
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value,
            })
          }
        ></input>
        <span onClick={(e) => togglePassword(e)} style={{ cursor: "pointer" }}>
          <span>
            {showPass ? (
              <FontAwesomeIcon icon={faEye} className="customIcon" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="customIcon" />
            )}
          </span>
        </span>
      </div>
      <div className="inputs-container">
        <div className="input-container">
          <label className="city">City</label>
          <input
            type="text"
            className="city"
            onChange={(e) => setUser({ ...user, city: e.target.value })}
          ></input>
        </div>
        <div className="input-container">
          <label className="street">Street</label>
          <input
            type="text"
            className="street"
            onChange={(e) => setUser({ ...user, street: e.target.value })}
          ></input>
        </div>
      </div>
      <button className="submit" type="button" onClick={handleSubmit}>
        submit
      </button>
      <span
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {message}
      </span>
    </React.Fragment>
  );
};

export default RegisterForm;
