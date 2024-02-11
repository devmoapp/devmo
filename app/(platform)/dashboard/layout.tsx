import { Navbar } from './_components/navbar';
import { OrgSidebar } from './_components/org-sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='h-full flex'>
      <OrgSidebar />
      <div className='h-full flex-1'>
        <Navbar />
        {children}
      </div>
    </main>
  );
};
export default DashboardLayout;
