import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ACTION_login } from "../store/ducks/login";

import "../css/login.css";

import ImgBG from "../images/log-img.jpg";
import { API_login } from "../fake-api/api";

const Login = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    loading: false,
    erro: false,
  });

  const updateState = (e) =>
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    setState((state) => ({ ...state, erro: false }));

    if (!state.name || !state.email || !state.password) {
      return false;
    }

    setState((state) => ({ ...state, loading: true }));

    API_login(state)
      .then((response) => dispatch(ACTION_login(response)))
      .catch((erro) =>
        setState((state) => ({ ...state, loading: false, erro }))
      );
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
                  disabled={state.loading}
                />
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={state.email}
                  onChange={updateState}
                  disabled={state.loading}
                />
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={state.password}
                  onChange={updateState}
                  disabled={state.loading}
                />
                <button type="submit" className="login-btn-LG">
                  {state.loading ? "Loading..." : "Submit"}
                </button>
                {state.erro && <div className="alert">{state.erro}</div>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
