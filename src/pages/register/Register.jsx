import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Social App</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, consectetur adipisci, a laboriosam obcaecati illum quod iste velit cumque eligendi.</p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Name" />
                        <button>Register</button>
                    </form>
                    <span className="dont">Already have an account? <Link to="/login">Login</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Register
