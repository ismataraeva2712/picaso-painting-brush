import React from 'react';
import Button from '../Shared/Button';

const Newsletter = () => {
    return (
        <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold text-primary">Newsletter</h1>
                    <p className="py-6">Subscribe our newsletter to get update information,news and inside.So please provide your name ,email and press subscribe button</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="your email" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <Button>Subscribe Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;