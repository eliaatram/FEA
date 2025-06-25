import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { movieApi } from "../constants/axios";
import { userRequests } from "../constants/requests";
import { useNavigate } from "react-router-dom";
import useAppStateContext from "../hooks/useAppStateContext";

const LoginForm = () => {
  const { dispatch } = useAppStateContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const togglePassword = (event) => {
    event.preventDefault();

    setShowPass(!showPass);
  };

  const authentication = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setMessage("Please fill all required fields");
    } else {
      try {
        const response = await movieApi.post(userRequests.login, {
          email,
          password,
        });
        dispatch({
          type: "Login",
          payload: {
            token: response.data.token,
            email,
            username: response.data.username,
          },
        });
        navigate("/");
      } catch (err) {
        setMessage(err.response.data.message);
      }
    }
  };

  return (
    <React.Fragment>
      <label className="email">Email</label>
      <input
        type="text"
        className="email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label className="password">Password</label>
      <input
        type={showPass ? "text" : "password"}
        className="password"
        onChange={(e) => setPassword(e.target.value)}
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
      <button className="submit" onClick={(e) => authentication(e)}>
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

export default LoginForm;
