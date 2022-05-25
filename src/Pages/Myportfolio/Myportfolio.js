import React from 'react';
import { Link } from 'react-router-dom';
import female from '../../assetes/female.webp'
import facebook from '../../assetes/facebook.png'
import github from '../../assetes/github.png'
import ss1 from '../../assetes/ss1 (1).jpg'
import sss from '../../assetes/sss.jpg'
import s2 from '../../assetes/s2.jpg'

const Myportfolio = () => {
    return (
        <div className='px-12 mx-auto text-left'>
            <div>
                <div class="hero">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img src={female} class="max-w-sm rounded-lg shadow-2xl" />
                        <div className='text-left'>
                            <h1 class="text-3xl font-bold text-primary">Hello,I am Ismat Ara</h1>
                            <h1 class="text-2xl font-bold text-secondary">Full Stack Developer.</h1>
                            <p >I am a web developer located in maldives.I currently finish my full web developing course.just now i am looking to take a job or intern.</p>
                            <p >Phone: +9609425238</p>
                            <p >Email: evaismat2@gmail.com</p>
                            <p >Address: k.kaasshidhoo island,Maldives.</p>
                            <p className='flex justify-items-center'>Social :  <img style={{ height: '30px' }} src={facebook} alt="" /> ,
                                <img style={{ height: '30px' }} src={github} alt="" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <h1 class="text-2xl font-bold ">Education</h1>
                <h3 className='text-xl '>Bse in CSE</h3>
                <h3 className='text-xl '>Daffodil international university</h3>
            </div>
            <div className='text-left'>
                <h1 class="text-2xl font-bold ">Skill</h1>
                <p ><span className='mr-5'>Html</span><progress class="progress progress-primary w-56 " value="100" max="100"></progress></p>
                <p><span className='mr-5'>CSS</span><progress class="progress progress-primary w-56" value="100" max="100"></progress></p>
                <p><span className='mr-5'>Bootstrap</span><progress class="progress progress-primary w-56" value="100" max="100"></progress></p>
                <p><span className='mr-5'>Tailwind</span><progress class="progress progress-primary w-56" value="100" max="100"></progress></p>
                <p><span className='mr-5'>Javascript</span><progress class="progress progress-primary w-56" value="100" max="100"></progress></p>

                <p><span className='mr-5'>React</span><progress class="progress progress-primary w-56" value="90" max="90"></progress></p>
                <p><span className='mr-5'>Nodejs</span><progress class="progress progress-primary w-56" value="70" max="100"></progress></p>
                <p><span className='mr-5'>Expressjs</span><progress class="progress progress-primary w-56" value="70" max="100"></progress></p>
            </div>
            <div>
                <h1 class="text-2xl font-bold my-10">My Project Demo</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure ><img style={{ height: '200px' }} src={ss1} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-primary">Perfume WareHouse</h2>
                            <h2 class="text-xl">Full stack website</h2>
                            <p>Live link: https://perfumes-project.web.app/</p>

                        </div>
                    </div>
                    {/* ------------ */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure ><img style={{ height: '200px' }} src={sss} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-primary">Solo-Tourist-Guide,Independent service privider website</h2>
                            <h2 class="text-xl "> Frontend with react,authentication system</h2>
                            <p>Live Link : https://tourist-guide-e4792.web.app/</p>

                        </div>
                    </div>
                    {/* ----------------------- */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure ><img style={{ height: '200px' }} src={s2} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-primary">Macbook-pro-zone review based website</h2>
                            <h2 class="text-xl">Frontend with react</h2>
                            <p>Live Link:  https://macbook-pro-zone-site-by-eva.netlify.app/</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Myportfolio;