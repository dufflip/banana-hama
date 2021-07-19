import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ACTION_login } from "../store/ducks/login";

import "../css/login.css";

import ImgBG from "../images/log-img.jpg";

const Login = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const updateState = (e) =>
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.name || !state.email || !state.password) {
      return false;
    }

    dispatch(ACTION_login(state));
  };

  return (
    // <div className="login">
    //   <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
    //     <h1>Login Here</h1>
    //     <input
    //       type="name"
    //       name="name"
    //       placeholder="Name"
    //       value={state.name}
    //       onChange={updateState}
    //     />
    //     <input
    //       type="email"
    //       name="email"
    //       placeholder="Email"
    //       value={state.email}
    //       onChange={updateState}
    //     />
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //       value={state.password}
    //       onChange={updateState}
    //     />
    //     <button type="submit" className="login-btn">
    //       Submit
    //     </button>
    //   </form>
    // </div>
    <>
      <section className="section-LG">
        <div className="div-LG">
          <div className="img-box-LG">
            <img src={ImgBG} alt="background image" />
          </div>
          <div className="form-box-LG">
            <h2>Login Here</h2>
            <form className="login-form-LG" onSubmit={(e) => handleSubmit(e)}>
              <div className="input-box-LG">
                <span>Username</span>
                <input
                  type="name"
                  name="name"
                  placeholder="Name"
                  value={state.name}
                  onChange={updateState}
                />
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={state.email}
                  onChange={updateState}
                />
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={state.password}
                  onChange={updateState}
                />
                <button type="submit" className="login-btn-LG">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
