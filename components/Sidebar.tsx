'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DocumentIcon, ToolsIcon, CustomerIcon, BurgerMenuIcon } from './Icons';
import React, { useState } from 'react';

type Item = {
  name: string;
  path: string;
  icon: React.ComponentType<{ size: string }>;
};

const items: Item[] = [
  {
    name: "Orders Dashboard",
    path: "/orderList",
    icon: DocumentIcon
  },
  {
    name: "Create Order",
    path: "/createOrder",
    icon: ToolsIcon
  },
  {
    name: "Rate Calculator",
    path: "/rateCalculator",
    icon: CustomerIcon
  },
];

function Sidebar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false)

  return (
    <>
    <button onClick={() => {setShow(!show)}} className='absolute top-0 left-0 py-4 px-3 block md:hidden'>
      <BurgerMenuIcon />
    </button>
    <div className={`${show ? 'block' : 'hidden md:block'} min-h-[calc(100vh-64px)] w-full max-w-[145px] md:max-w-[145px] bg-[#2B7AA6] shadow-lg z-10 pt-10`}>
        {items.map(item => (
          <Link
            key={item.path}
            href={item.path}
            className={`p-3 min-h-28 flex flex-col justify-center font-medium items-center cursor-pointer mb-4 text-center
            ${pathname === item.path ? 'bg-[#3BAAE8] text-white' : 'text-gray-300'} hover:text-white`}
          >
            <item.icon size="w-6 h-6 mx-auto mb-2" />
            {item.name}
          </Link>
        ))}
    </div>
    </>
  );
}

export default Sidebar;
