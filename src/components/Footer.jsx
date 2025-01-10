import React from 'react';
import { FooterDetails } from './footerInnerComponents/FooterDetails';
import { FiFacebook } from 'react-icons/fi';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { TiSocialLinkedin } from 'react-icons/ti';
import { AiOutlineSend } from 'react-icons/ai';

export const Footer = () => {
  const supportLi = [
    "111 Bijoy Sarani, Dhaka,",
    "DH 1515, Bangladesh.",
    "exclusive@gmail.com",
    "+88015-88888-9999",
  ];

  const AccountLi = [
    "My Account",
    "Login / Register",
    "Cart",
    "Wishlist",
    "Shop",
  ];

  const QuickLinkLi = [
    "Privacy Policy",
    "Login / Register",
    "Terms Of Use",
    "FAQ",
    "Contact",
  ];

  return (
    <div className="w-full h-fit pb-4 bg-black flex flex-col gap-y-6">
      {/* Main Footer Content */}
      <div className="w-full h-fit px-4 sm:px-8 md:px-16 lg:px-28 py-10 md:py-16">
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-y-10 justify-between">
          {/* Subscribe Section */}
          <div className="w-full lg:w-1/5 flex flex-col gap-y-8 text-white">
            <h1 className="text-2xl font-bold">Exclusive</h1>
            <h1 className="text-lg md:text-xl font-medium">Subscribe</h1>
            <p className="text-sm font-normal">
              Get 10% off your first order
            </p>
            <div className="w-full lg:w-4/5 h-12 flex items-center gap-2 border border-white rounded-md pr-2">
              <input
                className="flex-1 w-full h-full font-normal outline-none text-sm text-white bg-transparent placeholder:text-sm px-3"
                type="text"
                placeholder="Enter your email"
              />
              <AiOutlineSend className="w-6 h-6 cursor-pointer text-white" />
            </div>
          </div>

          {/* Support, Account, and Quick Links */}
          <FooterDetails label="Support" items={supportLi} className="w-full lg:w-1/5" />
          <FooterDetails label="Account" items={AccountLi} className="w-full lg:w-1/5" />
          <FooterDetails label="Quick Link" items={QuickLinkLi} className="w-full lg:w-1/5" />

          {/* Share App Section */}
          <div className="w-full lg:w-1/5 flex flex-col  gap-y-4 text-white">
            <h1 className="text-lg md:text-xl font-medium">Share App</h1>
            <div className="w-full flex flex-col sm:flex-row gap-3 text-2xl">
              <FiFacebook className="cursor-pointer hover:text-blue-500" />
              <CiTwitter className="cursor-pointer hover:text-blue-400" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
              <TiSocialLinkedin className="cursor-pointer hover:text-blue-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full border-t pt-3 border-gray-700 flex justify-center items-center text-gray-400">
        <h1 className="font-normal text-sm md:text-base">Copyright Rimel 2022. All rights reserved</h1>
      </div>
    </div>
  );
};
