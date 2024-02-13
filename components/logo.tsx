import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ['700'],
});

export const Logo = () => {
  return (
    <Link href='/'>
      <div className='hidden sm:flex items-center justify-center gap-x-3 hover:opacity-80 transition'>
        <Image
          src='/logo.svg'
          alt='Logo'
          height={30}
          width={30}
        />
        <p className={cn('font-bold text-2xl text-neutral-700 pb-1', font.className)}>Devmo</p>
      </div>
    </Link>
  );
};
