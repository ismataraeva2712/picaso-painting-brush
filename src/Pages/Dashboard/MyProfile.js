import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import avater from '../../assetes/avater.png'
const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [updateUser, setUpdateUser] = useState(null)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [profile, setProfile] = useState({})
    useEffect(() => {
        const url = `https://safe-coast-58270.herokuapp.com/user/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [user.email, updateUser])


    const onSubmit = async data => {

        const myProfile = {
            name: user.displayName,
            email: user.email,

            phone: data.phone,
            education: data.education
        }
        console.log(myProfile)
        fetch(`https://safe-coast-58270.herokuapp.com/user/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(myProfile)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setUpdateUser(result)
                toast.success("Successfully added Your profile")


            })

    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2  gap-10'>
            <div>
                <div>
                    <div className='flex justify-center  '>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-center text-xl font-bold text-primary"> Edit Profile</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>




                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">phone</span>

                                        </label>
                                        <input {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'phone is required'
                                            }
                                        })}
                                            type="number"
                                            placeholder="Your phone"
                                            className="input input-bordered w-full max-w-xs" />
                                        <label className="label">
                                            {errors.phone?.type === 'required' &&
                                                <span className="label-text-alt text-red-500">{errors.phone.message}</span>}

                                        </label>
                                    </div>
                                    {/* =========================== */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">education</span>

                                        </label>
                                        <input {...register("education", {
                                            required: {
                                                value: true,
                                                message: 'education is required'
                                            }
                                        })}
                                            type="text"
                                            placeholder="education"
                                            className="input input-bordered w-full max-w-xs" />
                                        <label className="label">
                                            {errors.education?.type === 'required' &&
                                                <span className="label-text-alt text-red-500">{errors.education.message}</span>}


                                        </label>
                                    </div>
                                    {/* ============= */}


                                    <div><input className='btn btn-primary' type="submit" value='Add ' /></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* profile  */}
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img className='rounded-full' style={{ height: '150px' }} src={avater} alt="Shoes" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name: {user.displayName}</h2>
                        <p>Email:{user.email}</p>

                        <p>Phone: {profile?.phone ? profile.phone : 'update your phone number'}</p>

                        <p>Education:  {profile?.education ? profile.education : 'update your education '}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;