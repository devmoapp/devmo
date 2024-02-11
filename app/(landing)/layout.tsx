import { Navbar } from './_components/navbar';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
export default LandingLayout;
