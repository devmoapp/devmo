import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='text-gray-600 bg-gray-300'>
      <div className='container px-4 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <div className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
          <Image
            src='/logo.svg'
            alt='Logo'
            width={40}
            height={40}
          />
          <span className='ml-3 text-xl'>Devmo</span>
        </div>
        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          © 2024 Devmo - All rights reserved
        </p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <Link href='/'>GITHUB</Link>
        </span>
      </div>
    </footer>
  );
};
