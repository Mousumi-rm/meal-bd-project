import React from 'react';
import glitch from '../img/glitch.png'


const Home = () => {
    return (
        <div className=''>
            <div className='h-screen bg-cover bg-no-repeat overflow-hidden '>
                {/* big-pic */}
                <img className='w-full h-full bg-auto bg-no-repeat bg-center ' src={glitch} alt="cake-picture" />
            </div>
        <div className='bg-black text-white text-center px-10 py-10'>
            {/* footer */}
            this is footer copy right@mousumirahmat !!!

        </div>
        </div>
    );
};

export default Home;