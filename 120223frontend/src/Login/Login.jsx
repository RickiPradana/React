import "./Login.css";
// import "../App.css";
import infinity from "../assets/KAICommuter.png";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser, reset } from '../features/authSlice';
import { useEffect, useState } from "react";
// import { useState } from "react";
// import warning from "../assets/warning.png";

// import { auth } from "../Firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  // const [NewUser, setNewUser] = useState(true);

  // const [username, setusername] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");

  // const [error, seterror] = useState(false);
  // const [ErrorMsg, setErrorMsg] = useState(false);

  // const submit = (e) => {
  //   e.preventDefault();
  //   seterror(false);

  //   if (NewUser) {
  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then(() => {
  //         localStorage.setItem("username", username);
  //       })
  //       .catch((error) => {
  //         seterror(true);
  //         const errorMessage = error.message;
  //         setErrorMsg(errorMessage);
  //       });
  //   } else {
  //     signInWithEmailAndPassword(auth, email, password).catch((error) => {
  //       seterror(true);
  //       const errorMessage = error.message;
  //       setErrorMsg(errorMessage);
  //     });
  //   }
  // };

  return (
    <div className="spasi-atas-login">
      <div className="login-page">
        {/* <header>
        <span>
          from <i>Infinity Studios</i>
        </span>
      </header> */}

        <img className="logo" src={infinity} alt="" />

        <h2 className="title">
          Sign In
        </h2>

        <form onSubmit={Auth}>
          {isError && <h4 className="text-error">{message}</h4>}
          {/* {NewUser && (
          <div className="username">
            <input
              onChange={(e) => setusername(e.target.value)}
              type="username"
              id="username"
              required
            />
            <label htmlFor="username">username</label>
          </div>
        )} */}

          <div className="email">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              // required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="password">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              // required
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit">Login</button>
          {/* {error && <img src={warning} alt="" className="status" />}

        {error && <span className="error">Process Failed</span>}
        {error && <span className="error">{ErrorMsg}</span>}

        <button type="submit">{NewUser ? "Sign Up" : "Log In"}</button>

        {NewUser ? (
          <span className="user-stat">
            Already have an account?{" "}
            <b
              onClick={() => {
                setNewUser(false);
                seterror(false);
              }}
            >
              Log In
            </b>
          </span>
        ) : (
          <span className="user-stat">
            Don't have an account?{" "}
            <b
              onClick={() => {
                setNewUser(true);
                seterror(false);
              }}
            >
              Sign Up
            </b>
          </span>
        )} */}
        </form>
      </div>
    </div>
  );
};

export default Login;
