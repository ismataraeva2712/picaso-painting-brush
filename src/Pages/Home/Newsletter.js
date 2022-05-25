import React from 'react';
import Button from '../Shared/Button';

const Newsletter = () => {
    return (
        <div class="hero  ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-2xl font-bold text-primary">Newsletter</h1>
                    <p class="py-6">Subscribe our newsletter to get update information,news and inside.So please provide your name ,email and press subscribe button</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="your email" class="input input-bordered" />

                        </div>
                        <div class="form-control mt-6">
                            <Button>Subscribe Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;