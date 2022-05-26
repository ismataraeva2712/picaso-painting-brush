import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { faEarth } from '@fortawesome/free-solid-svg-icons'
import { faUsersRays } from '@fortawesome/free-solid-svg-icons'
const Business = () => {
    return (
        <>
            <h2 className='text-primary font-bold my-10 text-2xl'>Business Summary</h2>

            <div className="stats stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Customer</div>
                    <div className="stat-value text-primary">45.6K</div>
                    <div className="stat-value text-secondary"><FontAwesomeIcon icon={faUsersLine} /></div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Annual revenue</div>
                    <div className="stat-value text-secondary">20.6M</div>
                    <div className="stat-value text-primary"><FontAwesomeIcon icon={faDollar} /></div>
                    <div className="stat-desc">21% more than last year</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Paint Brush</div>
                    <div className="stat-value text-primary">31K</div>
                    <div className="stat-value text-secondary"><FontAwesomeIcon icon={faPaintBrush} /></div>
                    <div className="stat-desc">Coming soon more stocks</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Customer</div>
                    <div className="stat-value text-secondary">6,200</div>
                    <div className="stat-value text-primary"><FontAwesomeIcon icon={faUsersRays} /></div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Worldwide cover</div>
                    <div className="stat-value text-primary">20 country</div>
                    <div className="stat-value text-secondary"><FontAwesomeIcon icon={faEarth} /></div>
                    <div className="stat-desc">↘︎ 90 (40%) revenue come</div>
                </div>

            </div>
        </>
    );
};

export default Business;