import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {FaTiktok} from "react-icons/fa"
import {BsPinterest} from "react-icons/bs"


import { getCategories } from '../services';



const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  
  return (
   <footer>
    <div className="wrapper container mx-auto px-5 md:px-10 mb-8">
    <div className="footer-top">
          <div className="left">
            <h3 className='text-lg'>Discover best products</h3>
      {categories.map((category, index) => (
    
          <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer `}>{category.name}</span>
        </Link>
  
       
      ))}
           
          </div>
          <div className="right">
            <h3 className='text-lg'>Get an early update</h3>
            <div className="input-area">
              <input type="email" placeholder='Enter Your Email'/>
              <button>subscribe</button>
            </div>
            <div className="media-links">
              <h3>Get in touch with us</h3>
              <div className="icons">
              <a href="https://www.facebook.com/TechItems.online?mibextid=ZbWKwL" target="_blank" ><BsFacebook className='icon' /></a>
              <a href="/"><AiFillInstagram className='icon'/></a>
              <a href="/"><FaTiktok className='icon' /></a>
              <a href="/"><BsPinterest className='icon'/></a>
              </div>
              <Link href="/">
              <img className='logo footer-logo' src="logo.png" alt="TechItems" />
              </Link>
              
            </div>
          </div>
      </div>
      <div className="footer-bottom">
         <p>2023 &copy; all rights reserved | design and developed by Lakshitha Perera</p>
      </div>
    </div>
    
   </footer>
  )
}

export default Footer;
