import React from 'react';
import { FireIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className='bg-gray-400  max-auto sm:max-w-xl md:max-w-full lg:w-full px-24 py-8 '>
            {/* logo-area */}
            <div className='flex flex-col justify-between items-center sm:flex-row'>
                <div className=''>
                    <Link to='/' className='flex'>
                    <span className='font-bold text-xl text-red-700 '>K</span>
                    <FireIcon className='h-6 w-6 text-yellow-400'/>
                    <span className='font-bold text-xl text-red-700 '>FC</span>
                    </Link>
                </div>
               
                <div className=''>
                    <ul className='flex flex-col sm:flex-row  '>
                        <li className='px-5'><NavLink to='/'
                         title='home link'
                          className={({isActive})=>(isActive? 'text-red-500':'')}>
                            Home
                            </NavLink></li>
                        <li className='px-5'><NavLink to='/food'
                         title='food link'
                          className={({isActive})=>(isActive? 'text-red-500':'')}>
                            Food
                            </NavLink></li>
                        <li className='px-5'><NavLink to='/about'
                         title='about link'
                          className={({isActive})=>(isActive? 'text-red-500':'')}>
                            About
                            </NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;