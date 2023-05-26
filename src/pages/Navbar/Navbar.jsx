import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthProvider } from '../../context/Context';
import './Navbar.css'
const Navbar = () => {
    const { logOut, user } = useContext(AuthProvider)
    const signOut = () => {
        logOut()
            .then(() => alert('You are loged out'))
            .catch(e => {
                console.error(e)
            })
    }
    return (
        <div>
            <div className="navbar  z-[-1] justify-between text-white">
                <div className='flex '>

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle block-inline md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className={({isActive})=> isActive?"bg-gray-500":''} to='/'>Home</NavLink>
                            {/* <NavLink to='/news'>News</NavLink>
                    <NavLink to='/contact'>Contact</NavLink> */}
                            <NavLink to='/about'>About</NavLink>
                            {
                                user?.uid ? <NavLink onClick={signOut} to='/login' >Log Out</NavLink>
                                    :
                                    <>
                                        <NavLink to='/login'>Log In</NavLink>
                                        <NavLink to='/registe'>Sign Up</NavLink>
                                    </>
                            }
                        </ul>
                    </div>
                    <div className="">
                        <NavLink className="btn btn-ghost normal-case text-xl font-[cursive]">Turio</NavLink>
                    </div>
                </div>

                <div className="form-control hidden lg:block w-[30%]">
                    <input type="text" placeholder="Search" className="input dark:bg-transparent input-bordered w-[100%]" />
                </div>
                <div className='hidden md:block lg:space-x-12 md:space-x-5'>
                    <NavLink className={({isActive})=> isActive?"bg-orange-300 text-xl text-black font-[cursive] font-semibold px-3 py-2 rounded-xl":'text-xl font-[cursive] font-semibold hover-effect'  } to='/'>Home</NavLink>
                    {/* <NavLink to='/news'>News</NavLink>
                    <NavLink to='/contact'>Contact</NavLink> */}
                    <NavLink className={({isActive})=> isActive?"bg-orange-300  text-black text-xl font-[cursive] font-semibold px-3 py-2 rounded-xl":'text-xl font-[cursive] font-semibold hover-effect'} to='/about'>About</NavLink>
                    {
                        user?.uid ? <NavLink className={({isActive})=> isActive?"bg-orange-300 text-xl text-black font-[cursive] font-semibold px-3 py-2 rounded-xl":'text-xl font-[cursive] font-semibold hover-effect'} onClick={signOut} to='/login' >Log Out</NavLink>
                            :
                            <>
                                <NavLink className={ ({isActive})=> isActive?"bg-orange-300 text-xl text-black font-[cursive] font-semibold px-3 py-2 rounded-xl":'text-xl font-[cursive] font-semibold hover-effect'} to='/login'>Log In</NavLink>
                                <NavLink className={({isActive})=> isActive?"bg-orange-300 text-xl text-black font-[cursive] font-semibold px-3 py-2 rounded-xl":'text-xl font-[cursive] font-semibold hover-effect'} to='/registe'>Sign Up</NavLink>
                            </>
                    }


                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </NavLink>
                        </li>
                        <li><NavLink>Setting</NavLink></li>
                        <li><NavLink>Sign Up</NavLink></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;