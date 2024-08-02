import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodApi from './FoodApi';

const Food = () => {
    const foods = useLoaderData();
    console.log(foods)
    return (
        <div className='my-container'>
            <div className='grid grid-cols-2 gap-8'>
             {
                   foods.map(food =><FoodApi
                    key={food.idCategory}
                    food={food}
                    ></FoodApi>)
             }
            </div>
        </div>
    );
};

export default Food;