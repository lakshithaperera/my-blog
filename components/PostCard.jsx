import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className=" shadow-lg rounded-lg p-0 lg:p-5 pb-12  post-card">
    {/* <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={post.title}
        className="shadow-lg rounded-t-lg lg:rounded-lg"
        layout="fill"
        src={post.featuredImage.url}
      />
    </div> */}
    <div className="relative overflow-hidden shadow-md pb-80 mb-4">
      <img src={post.featuredImage.url} alt={post.title} className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
    </div>

    <h1 className="transition duration-700 text-center mb-4 cursor-pointer hover:text-pink-600 text-xl font-semibold">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>
    <div className="block lg:flex text-center items-center justify-center mb-4 w-full">
      <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={post.author.name}
          height={30}
          width={30}
          className="align-middle rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
      </div>
      <div className="font-medium text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
    </div>
    <p className="text-center text-md text-gray-700 font-normal px-4 lg:px-5 mb-5 lg:mb-20">
      {post.excerpt}
    </p>
    <div className="text-center post-btn">
      <Link href={`/post/${post.slug}`}>
        <span className="transition duration-400 ease transform  inline-block  text-sm font-semibold rounded-full text-gray-600 px-5 py-3 cursor-pointer post-card-btn">Read More</span>
      </Link>
    </div>
  </div>
);

export default PostCard;
