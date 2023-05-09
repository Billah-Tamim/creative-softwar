import React, { useContext } from 'react';
import './Login.css';
import { AuthContext } from '../../context/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Login = () => {
    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from.pathname || '/products' ;

    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
        .then(result=>{
            const user = result.user;
            form.reset();
            navigate(from, {replace:true});
            console.log(user);
        })
        .catch(error=>{
            console.error(error);
        })
    }

    return (
        <div>
            <div className="hero  bg-base-200">
                <form onSubmit={handleLogIn} className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h3 className="text-4xl font-bold text-success">Log In Your Account</h3>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body mx-auto">
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
                            </div>
                            <a href='/register' className="link link-error">If you don't have an account?</a>
                            <div className="">
                                <button type='submit' className="btn btn-success">Login</button>
                            </div>
                        </div>
                    </div>
                    
                </form>
                <Button variant="outline-success">Login With Google</Button>
            </div>
        </div>
    );
};

export default Login;