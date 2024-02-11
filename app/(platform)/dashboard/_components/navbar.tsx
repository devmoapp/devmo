'use client';

import { UserButton, OrganizationSwitcher, useOrganization } from '@clerk/nextjs';

// TODO: Implement SearchInput and InviteButton - don't copy from miroclone
// import { SearchInput } from "./search-input";
// import { InviteButton } from "./invite-button";

export const Navbar = () => {
  const { organization } = useOrganization();

  return (
    <div className='flex items-center gap-x-4 p-5 bg-gray-800'>
      <div className='hidden lg:flex lg:flex-1'>Search bar</div>
      <div className='block lg:hidden flex-1'>
        <OrganizationSwitcher
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: '376px',
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
      </div>
      {organization && <p>Invite Btn</p>}
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};
