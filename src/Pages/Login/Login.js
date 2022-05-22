import React, { useEffect } from 'react';
import auth from './../../firebase.init';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from './../../Hooks/useToken';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    const[token]=useToken(user||user2)
    // ===================================
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    // ====================
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
    if (loading || loading2) {
        return <Loading></Loading>
    }
    let errorMessage;
    if (error || error2) {
        errorMessage = <p className='text-red-500'>{error?.message || error2?.message}</p>
    }
    //============ onsubmit================
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)


    };
    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-xl font-bold text-primary">Sign In</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>

                                </label>
                                {/* ------email------- */}
                                <input {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'use a valid email'
                                    }
                                })}
                                    type="text"
                                    placeholder="Your email"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.email?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' &&
                                        <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                </label>
                            </div>
                            {/* =====password======== */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>

                                </label>
                                <input {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'must be 6 character or longer'
                                    }
                                })}
                                    type="password"
                                    placeholder="Your Password"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.password?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' &&
                                        <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                </label>
                            </div>
                            {/* ========================= */}
                            {errorMessage}
                            <input className='btn w-full max-w-xs btn-primary font-bold text-white' type="submit" value='Sign In' />
                        </form>
                        <p><small>New to <spna className="text-secondary">Picaso Painting Brush</spna>?<Link className='text-primary' to='/signup'>Create an account</Link></small></p>

                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary font-bold">Continue with google</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;