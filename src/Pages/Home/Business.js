import React from 'react';

const Business = () => {
    return (
        <>
            <h2 className='text-primary font-bold my-10 text-2xl'>Business Summary</h2>

            <div class="stats stats-vertical lg:stats-horizontal shadow lg:w-full ">
                <div class="stat">
                    <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div class="stat-title">Total Likes</div>
                    <div class="stat-value text-primary">25.6K</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>
                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div class="stat-title">Annual revenue</div>
                    <div class="stat-value text-secondary">20.6M</div>
                    <div class="stat-desc">21% more than last year</div>
                </div>
                <div class="stat">
                    <div class="stat-title">Paint Brush</div>
                    <div class="stat-value text-primary">31K</div>
                    <div class="stat-desc">Coming soon more stocks</div>
                </div>

                <div class="stat">
                    <div class="stat-title">New Users</div>
                    <div class="stat-value text-secondary">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title">Worldwide cover</div>
                    <div class="stat-value text-primary">20</div>
                    <div class="stat-desc">↘︎ 90 (40%) revenue come</div>
                </div>

            </div>
        </>
    );
};

export default Business;