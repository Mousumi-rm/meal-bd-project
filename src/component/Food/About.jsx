import React from 'react';
import  cake2 from '../img/cake2.jpg'
import cake33 from '../img/cake33.png'
const About = () => {
    return (
        <div className='my-container'>
            <div className='flex flex-col lg:flex-row m-10 transition duration-200 transform hover:-translate-y-2 rounded-xl shadow-lg hover:shadow-2xl'>
                <img className=' rounded-xl h-48 w-full object-cover md:h-full md:w-48"' src={cake2} alt="pic cake" />
                <p className='px-5 py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Numquam veritatis possimus aliquid accusantium dolor ab
                      enim vitae culpa aperiam nesciunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quod hic sunt reprehenderit
                       velit ad omnis nesciunt ab vel consequatur quis soluta quia earum, similique voluptas sed enim esse voluptatum amet vitae minima libero!
                        Deserunt, qui et sint nulla ab ipsum, quam, itaque numquam hic quas tempore. Inventore voluptate similique itaque repellendus voluptatum 
                        quidem aperiam officia illo quas reprehenderit, aliquam, perferendis commodi incidunt. Fugit nostrum rem placeat numquam assumenda maiores 
                        perferendis sapiente quod tempora labore iusto quidem quam doloremque veritatis voluptate autem et recusandae accusamus,
                       cumque delectus consequatur corporis vel! Deserunt repellendus quos fugiat commodi perferendis saepe dolorum eius quidem?.</p>
            </div>
            <div  className='flex flex-col lg:flex-row  m-10 transition duration-200 transform hover:-translate-y-2 rounded-xl shadow-lg hover:shadow-2xl '>
                <p className='px-5 py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Numquam veritatis possimus aliquid accusantium dolor ab
                      enim vitae culpa aperiam nesciunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, blanditiis quaerat omnis ullam quis,
                       accusantium nobis quisquam nisi inventore ipsum laboriosam impedit ratione maxime odio dicta maiores consectetur assumenda! Reprehender
                       it quaerat dolore earum soluta illum, repellat quisquam, dolorum vitae, ratione et tempore! Dolorem sed facere laboriosam consequuntur 
                       ratione exercitationem quam aut unde quae vitae, repellendus consequatur magni similique facilis placeat accusamus tenetur consectetur
                        labore animi nulla temporibus tempora error suscipit saepe. Odit exercitationem perspiciatis, pariatur veritatis beatae nesciunt! 
                        Temporibus, excepturi odit eveniet officia, 
                      voluptate deserunt eligendi eius harum similique adipisci eos a quae nostrum quas ullam magni earum atque nulla?.</p>
            <img className='rounded-xl h-full  w-full' src={cake33} alt="picture cake" />
            </div>
        </div>
    );
};

export default About;