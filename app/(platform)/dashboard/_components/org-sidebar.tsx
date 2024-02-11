'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Poppins } from 'next/font/google';
import { LayoutDashboard, Star } from 'lucide-react';
import { OrganizationSwitcher } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get('favorites');

  return (
    <div className='hidden md:flex flex-col space-y-6 w-[250px] border-r pl-5 pt-5 pr-3'>
      <div className='flex items-center gap-x-2'>
        <Image
          src='/logo.svg'
          alt='Logo'
          height={40}
          width={40}
        />
        <span className={cn('font-semibold text-2xl hover:cursor-default', font.className)}>Devmo</span>
      </div>
      <OrganizationSwitcher
        appearance={{
          elements: {
            rootBox: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            },
            organizationSwitcherTrigger: {
              padding: '6px',
              width: '100%',
              borderRadius: '8px',
              border: '1px solid #E5E7EB',
              justifyContent: 'space-between',
              backgroundColor: 'white',
            },
          },
        }}
      />
      <div className='space-y-1 w-full'>
        <Button
          variant={favorites ? 'ghost' : 'secondary'}
          asChild
          size='lg'
          className='font-normal justify-start px-2 w-full'
        >
          <Link href='/dashboard'>
            <LayoutDashboard className='h-4 w-4 mr-2' />
            Team boards
          </Link>
        </Button>
        <Button
          variant={favorites ? 'secondary' : 'ghost'}
          asChild
          size='lg'
          className='font-normal justify-start px-2 w-full'
        >
          <Link
            href={{
              pathname: '/dashboard',
              query: { favorites: true },
            }}
          >
            <Star className='h-4 w-4 mr-2' />
            Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  );
};
