import React, { useState, useEffect } from 'react';
import {BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {FaTiktok} from "react-icons/fa"
import {BsPinterest} from "react-icons/bs"

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container  mx-auto px-5 md:px-10 mb-8">
      <div className="border-b relative w-full inline-block border-blue-400 py-5">
        <div className="md:float-left block">
          <Link href="/">
            <img className='logo' src="./logo.png" alt="" />
          </Link>
        </div>
        <div className="hidden md:float-left md:contents nav-bar">
          <div className="nav-item">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle  ml-4 font-semibold cursor-pointer">{category.name.split(' ').at(0)}</span></Link>
          ))}
          </div>
             <div className="icons">
              <a href="/"><BsFacebook className='icon' /></a>
              <a href="/"><AiFillInstagram className='icon'/></a>
              <a href="/"><FaTiktok className='icon' /></a>
              <a href="/"><BsPinterest className='icon'/></a>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
