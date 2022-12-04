import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContexts } from '../../Contexts/UserContext/UserContext';

const Register = () => {
    const { createUser, signInwithGoogle } = useContext(AuthContexts)
    console.log(createUser)


    const handlesubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
            })
            .catch(error => console.error(error))
    }

    const handleGoogleLogin = () => {
        signInwithGoogle()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div div >
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold p-8">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlesubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to='/login'> Already have an account?<button className="btn btn-link">Login</button></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' name='submit' className="btn btn-primary">Login</button>
                                <button onClick={handleGoogleLogin} type='submit' name='submit' className="btn btn-success my-2">Google Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;