import React from 'react';
import Link from 'next/link';

const Footer = () => {
   const handleClick = () => {
    window.open("https://stephaneroy-portfolio.netlify.app");
  };
  

  return (
    <div className='container mx-auto px-8'>
      <div className='border-t-2 w-full inline-block border-white w-full mb-2 inline-block py-10'>
        <div className='mt-1 float-left py-1 px-2 bg-teal-500 rounded'>
            <h4 className='text-white text-white'>© BLOGOTEK</h4>         
        </div>
        <div className='float-right pr-2'>   
          <button onClick={handleClick} target="_blank" rel="noreferrer noopener">   
          <svg xmlns="http://www.w3.org/2000/svg" className="animate-pulse rounded-md w-8 h-8 transition duration-500 ease hover:bg-teal-400 hover:text-black inline-block bg-pink-500 p-1 text-white cursor-pointer mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
          </svg>
          </button> 
          <Link href='/'>        
          <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce w-10 h-10 p-2 transition duration-500 ease hover:bg-teal-500 hover:text-black inline-block bg-pink-600 text-lg font-medium rounded-full text-white cursor-pointer ml-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;







