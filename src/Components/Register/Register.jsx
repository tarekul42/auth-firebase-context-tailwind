import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {

    const {user, createUser} = useContext(AuthContext);

    console.log(createUser);

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then((userCredential) => {
          const loggedUser = userCredential.user;
          console.log(loggedUser);
          event.target.reset();
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register Now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <Form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" name='username' className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                    <div className="form-control mt-2">
                    <p>Already have an account? Please<Link className='btn btn-active btn-link' to='/login'>Login</Link> </p>
                    </div>
                </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;