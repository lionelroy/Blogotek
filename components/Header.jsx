import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';
import logo from '../public/blogotek-logo.png';

import Link from 'next/link';

const categories = [{ name: 'Photography', slug: 'photography'}, {name: 'Web Development', slug: 'react'}]

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  
  return (
    <div className='container mx-auto px-8 mb-4'>
      <div className='border-b-2 w-full inline-block border-white w-full mb-6 inline-block py-8'>
        <div className='float-left rounded'>
          <Link href='/'>
            <img
              src={logo.src}
              className='hover:animate-pulse cursor-pointer'
            />
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='md:float-right transition duration-800 hover:border-b hover:pb-2 hover:border-white transform hover:scale-105 text-l mt-2 text-white ml-4 cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header;
