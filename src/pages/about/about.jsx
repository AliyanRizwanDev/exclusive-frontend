import React from "react";
import { AboutDetail, CUSTOMER_SERVICE, delivery, GUARANTEE } from "../../utils/data";
import { AboutBoxes } from "../../components/common/aboutBoxComponent/AboutBoxes";
import { AiOutlineDollar, AiTwotoneShop } from "react-icons/ai";
import { RiShoppingBag4Line } from "react-icons/ri";
import { TbMoneybag } from "react-icons/tb";
import { AboutCardImage } from "../../components/common/aboutBoxComponent/AboutCardImage";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";

export const About = () => {
  return (
    <div className="w-full h-fit px-4 lg:px-16 py-16">
    <div className="w-full h-fit flex flex-col gap-y-12">
      {/* Breadcrumb */}
      <div className="w-full flex gap-x-3 items-center">
        <h1 className="text-sm font-normal text-gray-400 cursor-pointer">
          Home
        </h1>
        <h1 className="text-sm font-normal text-gray-400">/</h1>
        <h1 className="text-sm font-normal">About</h1>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-wrap md:flex-nowrap gap-4">
        <div className="w-full md:w-5/12 h-auto flex flex-col gap-y-6">
          <h1 className="text-3xl lg:text-5xl font-semibold">
            {AboutDetail.title}
          </h1>
          <p className="text-base lg:text-lg font-normal">
            {AboutDetail.detail1}
          </p>
          <p className="text-base lg:text-lg font-normal">
            {AboutDetail.detail2}
          </p>
        </div>
        <div className="w-full md:flex-1">
          <img
            className="w-full h-auto object-cover"
            src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=imexDryZgDM1HfWASx~LWewQrgzDWr4dT2HMdB8YpwH5bAHrvVvDTpt7CBMK1OC9-758dcKG7NG3iarHrwYRrGfUYG0Shv5rWMZX-rAGH6LKckc~CzOCAMGPqTq7K5O~58RbYA4i-qJZRb4rSduf8UIErEFNxW22Oo~TzI867GxIbaPhK0ybls-kPnN6bJ8LqAV4t1hUL6AJja5JBuXffe30Nos0o9K2VYuTcJsqsbziyeP8TICl-CjoQBi~~3o9zOTt4FtLd~Fss7Y6lBpbbf3aH3yKLKIusL6jujDvg9liu6K2phjKhKyBzT65g3IH59xG2swW4DR9kZ1i~QEe~g__"
            alt="About"
          />
        </div>
      </div>

      {/* Stats Boxes */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 mt-16">
        <AboutBoxes
          label="10.5k"
          label2="Sellers active on our site"
          icon={<AiTwotoneShop className="text-2xl text-white" />}
        />
        <AboutBoxes
          label="33k"
          label2="Monthly Product Sale"
          icon={<AiOutlineDollar className="text-2xl text-white" />}
        />
        <AboutBoxes
          label="45.5k"
          label2="Customers active on our site"
          icon={<RiShoppingBag4Line className="text-2xl text-white" />}
        />
        <AboutBoxes
          label="25k"
          label2="Annual gross sale on our site"
          icon={<TbMoneybag className="text-2xl text-white" />}
        />
      </div>

      {/* Team Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        <AboutCardImage
          imgsrc="https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~kGS1VlgbHlM1i4XSfHXXbkZSfU6vaJzXwXwL-n27n6WS5nh8yaC90ZPMtuMEibV9ob37j4LgUgKPalk6TFgUEo8vOirBiEjGqQDFmTTY3bgTa5mw130eU4Qz2kCU8M6HFsD0CKk8H4cC5OUD7hxGkcG1EjlQUtKj5ENUxF8BISyhFfBd3Ikcfh8KFqD8Si-RnleP2mSTMrj-eobpN9h~H7t8KXSay-mF7A7q8hlqzEMJD49nkZAL6VbREsWOXsqPMlu7MXquQObb8b7gf0rLj1SY2a2GKj5Hs6AsKCIeCfr0cO0RdC1UWWVF8lrcYlooWadDm-ecYku8Q6~8AQ-g__"
          title="Tom Cruise"
          discription="Founder & Chairman"
        />
        <AboutCardImage
          imgsrc="https://s3-alpha-sig.figma.com/img/8438/eab9/a2fe88af0272adecd83422d0cb7e20d7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AagT9Md7lu2Deu3NPXXAaLTdxl9KQva8PvOWPhbvDyqKAaJTUekBRdMzmVzlXmwa46bZOXcK2VMrzE2yttlC70P4cks4E7cpOWcHPsk2Ql9n9Hy74mC-3BPmBphch2dprbTv6ulx~k5G1NmDuq6WK5rnuPKMpdShtgFRQu~H2egs15MQyID61D9b-YKJTVa4K81-L7rAUL9JChfzJI0RNKM9xdk9AbP78sJqXMoFhXescOUsiR8wtOCO~El6Ofi0glGcxsr2RxlwhsFO9cQ~mM08J-HTSKyi~qmsRue3DvkYvCcHqmXqvFuSh0AH~ouELKXVzjA1gKgMC0cSaba9tw__"
          title="Emma Watson"
          discription="Managing Director"
        />
        <AboutCardImage
          imgsrc="https://s3-alpha-sig.figma.com/img/ede4/8f2b/5df8103b281240ce5bafe5dd7d215ab8?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d0ZKk8tT3rAlquWSC-aBIf8pTWzEAywPLunkIgY2hMINmu~J2ZoUXMJMW-pqjD-rEjOY0E2hfWpsynyF1ZDm46V-CuVrYC00zuYX~P4Th3VDjfWgciwh53pZFVRKjjzs3Jcblmn59~oBJRdtg6Mumkgctdol20nHQYpsZZmsaMn3~gSilHQhXh8bKwJdOqexwLeH~w7AJ-myU4qjkSj3~qz3brjqTtFuOHhXFIzffZrM~2OXa9mOAgM8LNpRZ5zC51Y44BCaCnOriH8Pr0X1AfI4T6J7Ztg7T8UHFnrpFueZ7j5mM1NCFz6v2DIXdTVnYlE5maoCVVdLy~U1LfHkxQ__"
          title="Will Smith"
          discription="Product Designer"
        />
      </div>
    </div>
  </div>
  );
};
