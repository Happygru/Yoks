import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AOS from "aos";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    setTimeout(function () {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div
        className={`${
          isLoading ? "fixed" : "hidden"
        } transition-all top-0 flex items-center justify-center w-screen h-screen bg-white/90 z-[9999]`}
      >
        <span className="loader"></span>
      </div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;