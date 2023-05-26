import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../context/Context';

const LogIn = () => {
    const [error,setError] = useState('')
    const { emailLogInAuth,setLoader } = useContext(AuthProvider)
    const navigate= useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const logInFormHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    
        
        emailLogInAuth(email,password)
        .then(result =>{
            const user =result.user;
            if(user.emailVerified){
                 navigate(from,{replace:true})
                 alert('your email is varified and success fully loged In')
            }
            else{
                alert('your email is not varified ....')
                    navigate('/')
                }
        })
        .catch(e => {
            setError(e.message)
        })
        .finally(()=>{
            setLoader(false)
        })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <form onSubmit={logInFormHandler} className="hero-content  flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi  nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
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
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="label">
                                    <p>Do not have any account?? <Link to='/registe' className="label-text-alt link link-hover">Please Create an account</Link></p>

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;