import { Footer } from './_components/footer';
import { Navbar } from './_components/navbar';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-slate-100'>
      <Navbar />

      {children}
      <Footer />
    </div>
  );
};
export default LandingLayout;
