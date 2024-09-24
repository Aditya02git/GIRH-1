import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Start_up = () => {
  // State to manage which sections are open
  const [openSections, setOpenSections] = useState({});

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = (section) => {
    setOpenSections(prevState => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <div className="bg-[url('/img1.png')] bg-cover md:bg-center bg-[right] bg-fixed absolute top-0 left-0 w-full h-full z-0 dark:bg-[url('/img2.png')] dark:bg-cover md:dark:bg-[center_top] dark:bg-[right] dark:bg-fixed pt-10">
        <Navbar />
        <div className="flex justify-center items-center pt-[100px]">
          <button className='text-2xl text-white font-bold bg-blue-950 cursor-text px-3 py-2 rounded-full'>
            START-UP
          </button>
        </div>
        <div>
          <main className="main-content">

          <section className="card1">
            <h2
              onClick={() => document.getElementById('startup_patent_modal').showModal()}
              className="cursor-pointer flex justify-between items-center text-black font-bold text-[12px] md:text-[16px]">Patent</h2>

            <dialog id="startup_patent_modal" className="modal">
              <div className="modal-box bg-gray-300 dark:bg-slate-800">
                <form method="dialog">
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black dark:text-white"
                    onClick={() => document.getElementById('startup_patent_modal').close()}>
                    ✕
                  </button>
                </form>
                <ul className="space-y-3 p-2">
                  <li>
                    <Link
                      to="/startup_patent"
                      className="font-semibold block p-2 hover:bg-gray-100 rounded-md dark:hover:bg-slate-700 text-[14px] md:text-[16px] dark:text-white">
                      &#8680; Patent Lists
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/startup_patentapplication"
                      className="font-semibold block p-2 hover:bg-gray-100 rounded-md dark:hover:bg-slate-700 text-[14px] md:text-[16px] dark:text-white">
                      &#8680; Patent Application
                    </Link>
                  </li>
                </ul>
              </div>
            </dialog>
          </section>

              <section className="card1">
                <Link to="/startup_researchprojects"><h2 className=' text-black font-bold text-[12px] md:text-[16px]'>Projects</h2></Link>
              </section>
            
              <section className="card1">
                <Link to="/startup_intellectualproperty"><h2 className=' text-black font-bold text-[12px] md:text-[16px] text-center'>Intellectual Property</h2></Link>
              </section>
          
              <section className="card1">
            <h2
              onClick={() => document.getElementById('patent_modal').showModal()}
              className="cursor-pointer flex justify-center text-center items-center text-black font-bold text-[12px] md:text-[16px]">Funding For Start-Up</h2>

            <dialog id="patent_modal" className="modal">
              <div className="modal-box bg-gray-300 dark:bg-slate-800">
                <form method="dialog">
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black dark:text-white"
                    onClick={() => document.getElementById('patent_modal').close()}>
                    ✕
                  </button>
                </form>
                <ul className="space-y-3 p-2">
                  <li>
                    <Link
                      to="/startup_fundinghistory"
                      className="font-semibold block p-2 hover:bg-gray-100 rounded-md dark:hover:bg-slate-700 text-[14px] md:text-[16px] dark:text-white">
                      &#8680; Funding History
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/starup_fundingapplication"
                      className="font-semibold block p-2 hover:bg-gray-100 rounded-md dark:hover:bg-slate-700 text-[14px] md:text-[16px] dark:text-white">
                      &#8680; Funding Application
                    </Link>
                  </li>
                </ul>
              </div>
            </dialog>
          </section>

              <section className="card1">
                <Link to="/startup_fourarmsgroup"><h2 className=' text-black font-bold text-[12px] md:text-[16px] text-center'>Fourarms Group</h2></Link>
              </section>
            
              <section className="card1">
                <Link to="/startup_sales"><h2 className=' text-black font-bold text-[12px] md:text-[16px] text-center'>Sales</h2></Link>
              </section>
            
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Start_up;
