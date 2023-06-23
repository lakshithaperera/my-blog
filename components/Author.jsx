import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20 post-author">
    <div className="absolute  -top-14">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={"Lakshitha"}
        height={100}
        width={100}
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">ADMIN</h3>
    <p className="text-white text-ls">Discover the latest trends and in-depth insights on tech items and gadgets at TechItems. Our informative blog articles cover a wide range of topics, from reviews of the newest tech releases to expert guides on optimizing your tech devices. Stay updated and informed with TechItems, your go-to resource for all things tech</p>
  </div>
);

export default Author;
