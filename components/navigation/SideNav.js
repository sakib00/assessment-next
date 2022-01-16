import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const SideNav = () => {
  const router = useRouter();
  return (
    <div style={{ flex: '0 0 auto' }}>
      <div className='w-72  h-screen bg-white  shadow-lg py-10 px-4  '>
        <nav>
          <ul className='space-y-6'>
            <li
              className={
                router.pathname == '/authors'
                  ? 'block p-2  bg-gray-200 rounded-md font-semibold'
                  : 'bg-white block p-2 font-semibold'
              }
            >
              <Link href='/authors'>Author List</Link>
            </li>
            <li
              className={
                router.pathname == '/favorites'
                  ? 'block p-2 bg-gray-200 rounded-md font-semibold'
                  : 'bg-white block p-2 font-semibold'
              }
            >
              <Link href='/favorites'>Favorite Author List</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
