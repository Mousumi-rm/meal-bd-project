import React from 'react';

const FoodApi = ({food}) => {
    const{idCategory, strCategory,strCategoryDescription,strCategoryThumb} = food;
    return (
        <div className='mt-10 border-2 border-red-700 rounded-xl  bg-yellow-300 text-red-700' >
            <div className='text-center px-5 py-2'>
            <p className='id mt-2'>Id:{idCategory}</p>
            <p className='mt-2'>Category: {strCategory}</p>
            </div>
            <div className='px-8'>
            <p className='mt-2'>CategoryDescription: <br/> {strCategoryDescription}</p>
            <p className='mt-2'>CategoryThumb: {strCategoryThumb}</p>
            </div>
        </div>
    );
};

export default FoodApi;