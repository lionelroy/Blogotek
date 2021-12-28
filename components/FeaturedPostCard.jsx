import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-60 transition duration-500 transform hover:-translate-y-2">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-60" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-40 from-gray-500 via-gray-800 to-black w-full h-60" />
      <div className=" absolute flex items-center top-6 w-full justify-center">
        <Image
          unoptimized
          alt={post.author.name}
          height="25px"
          width="25px"
          className="align-middle drop-shadow-lg rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.author.name}</p>
      </div>
    <div className="flex flex-col rounded-lg p-2 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-2 text-shadow font-semibold text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
      <p className="text-white mb-2 text-shadow font-semibold text-l text-center">{post.title}</p>
    </div>
    <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
  </div>
);

export default FeaturedPostCard;