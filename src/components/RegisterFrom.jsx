import React from "react";
import { Link } from "react-router-dom"
import "./Register.css"

function RegisterFrom({handleRegister, register, setRegister}){
    return(
        <div className="sk">
             <form onSubmit={handleRegister} className="card">
             <p className="heading">Register Form</p>
        <div className="input-div">
          <input 
          className="input"
          placeholder="Email"
            type="email"
            value={register.username}
            onChange={(e) => {
              setRegister({...register, username: e.target.value})
            }}
            required
          />
        </div>
        <div className="input-div">
        <input
        className="input"
            type='name'
            placeholder='Name...'
            value={register.name}
            onChange={(e) => 
            setRegister({ ...register, name: e.target.value })}
            required
          />
         </div>
        <div className="input-div">
          <input
          className="input"
            type='password'
            placeholder='Password...'
            value={register.password}
            onChange={(e) => setRegister({ ...register, password: e.target.value })}
            required
          />
          </div>
        <div className="button-div">
        <button type='submit' className="submit">
       Register
        </button>
        </div>
        <div className="Login">
        Already have an account?
        <Link to='/' className="lo"> Login</Link>
        </div>
      </form>
 
      </div>
     
    )
}

export default RegisterFrom;