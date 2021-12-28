import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-black opacity-90 shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b border-white text-white pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer border-white block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} transition duration-500 transform hover:translate-x-2 pb-3 mb-3 text-white`}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;