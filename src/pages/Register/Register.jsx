import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../context/Context';

const Register = () => {
    const [error, setError] = useState('')
    const { emailSignInAuth,emailVarify } = useContext(AuthProvider)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const signUpFormHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        emailSignInAuth(email, password)
            .then(result => {
                const user = result.user;
                emailVarify().then(()=>alert('Please check your email and varify its you')).catch(e=>setError(e.message))
                navigate(from,{replace:true})
                
            })
            .catch(e => {
                setError(e.message)
            })

    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <form onSubmit={signUpFormHandler} className="hero-content  flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Create a Account!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi  nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                    <p className='text-red-500'>  {error}</p>
                                <label className="label">
                                    <p>Already have an account?? <Link to='/login' className="label-text-alt link link-hover">Please Log In</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;