import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContexts } from '../../Contexts/UserContext/UserContext';


const Header = () => {
    const { user, logout } = useContext(AuthContexts)
    console.log(user)


    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }



    return (
        <div>
            <div className="navbar bg-purple-600  text-black font-bold text-2xl p-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/register'>Register</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/order'>Order</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                        {
                            user?.email ?
                                <button onClick={handleLogout} className="btn btn-active btn-active m-2">LogOut</button>
                                :
                                <li><Link to='/login'>Login</Link></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email && <p>Wellcome, {user.email}</p>}
                </div>
            </div>
        </div>
    );
};

export default Header;