import React from 'react';

export const FooterDetails = ({ label, items }) => {
  return (
    <div className="text-white  w-full sm:w-auto  h-full flex flex-col gap-y-6 pb-2">
      <h1 className="text-lg md:text-xl font-medium">{label}</h1>
      <ul className="flex flex-col gap-y-4 text-sm font-normal">
        {items.map((item, index) => (
          <li
            className="cursor-pointer hover:underline"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};