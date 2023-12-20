import React from "react";
import { Link } from "react-router-dom";
import "../LoginForm.css"

function LoginForm({handleLogin, loginForm, setLoginForm}){
    return(
    <div className="sks">
             <form onSubmit={handleLogin} className="longin">
             <p className="heading">Login Form</p>
        <div className="email">
          <input
          className="input1"
            type='email'
            placeholder='Email...'
            value={loginForm.username}
            onChange={(e) =>
              setLoginForm({ ...loginForm, username: e.target.value })
            }
            required
          />
        </div>

        <div className="email">
          <input
          className="input1"
            type='password'
            placeholder='Password...'
            value={loginForm.password}
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
            required
          />
        </div>
         <div className="button1">
        <button className="submits" type='submit' >Login</button>
        </div>

        <div className="Login1">
        <Link to='/rese_password'>
        <button className="button2">
        Forget Password
        </button>
        </Link>
      </div>
        <div className="Register">
        You Not Register?
        <Link to={'/register'} className="re">
        <button>
        <span className="box">
        Register
          </span>
          </button>
          </Link>
        </div>
      </form>
      
    </div>
    
    )
}

export default LoginForm;