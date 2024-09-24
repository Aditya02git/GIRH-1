import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Research = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openSections, setOpenSections] = useState({});

  const toggleDropdown = (section) => {
    setOpenSections(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <>
      <div className="bg-[url('/img1.png')] bg-cover md:bg-center bg-[right] bg-fixed absolute top-0 left-0 w-full h-full z-0 dark:bg-[url('/img2.png')] dark:bg-cover md:dark:bg-[center_top] dark:bg-[right] dark:bg-fixed pt-10">
        <Navbar />
        <div className="flex justify-center items-center pt-[100px] ">
          <button className='text-2xl text-white font-bold bg-blue-950 cursor-text px-3 py-2 rounded-full'>
            RESEARCH
          </button>
        </div>
        <div>
          <main className="main-content">

            
          <section className="card1">
            <h2
              onClick={() => document.getElementById('patent_modal').showModal()}
              className="cursor-pointer flex justify-between items-center text-black font-bold text-[12px] md:text-[16px]">Patent</h2>

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
                      to="/patent"
                      className="font-semibold block p-2 hover:bg-gray-100 rounded-md dark:hover:bg-slate-700 text-[14px] md:text-[16px] dark:text-white">
                      &#8680; Patent Lists
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/patentapplication"
                      className="font-semibold block p-2 hover:bg-gray-100 rounded-md dark:hover:bg-slate-700 text-[14px] md:text-[16px] dark:text-white">
                      &#8680; Patent Application
                    </Link>
                  </li>
                </ul>
              </div>
            </dialog>
          </section>


            
              <section class="card1">
                  <Link to={"/researchprojects"}><h2 className=' text-black font-bold text-[12px] md:text-[16px] text-center'>Research Projects</h2></Link>
              </section>
            

            
              <section class="card1">
                  <Link to={"/intellectualproperty"}><h2 className=' text-black font-bold text-[12px] md:text-[16px] text-center'>Intellectual Property</h2></Link>
              </section>
            

              <section className="card1">
            <h2
              onClick={() => document.getElementById('funding_modal').showModal()}
              className="cursor-pointer flex justify-between items-center text-black font-bold text-[12px] md:text-[16px]">Funding</h2>

            <dialog id="funding_modal" className="modal">
              <div className="modal-box bg-gray-300 dark:bg-slate-800">
                <form method="dialog">
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black dark:text-white"
                    onClick={() => document.getElementById('funding_modal').close()}>
                    ✕
                  </button>
                </form>
                <ul className="space-y-3 p-2">
                  <li>
                    <Link
                      to="/fundinghistory"
                      className=" font-semibold block p-2 hover:bg-gray-100 rounded-md dark:hover:bg-slate-700 text-[14px] md:text-[16px] dark:text-white">
                      &#8680; Funding History
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/fundingrequest"
                      className="font-semibold block p-2 hover:bg-gray-100 rounded-md dark:hover:bg-slate-700 text-[14px] md:text-[16px] dark:text-white">
                      &#8680; Funding Request
                    </Link>
                  </li>
                </ul>
              </div>
            </dialog>
          </section>

            
              <section class="card1">
                  <Link to={"/community"}><h2 className=' text-black font-bold text-[12px] md:text-[16px] text-center'>Community</h2></Link>
              </section>
            
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Research;

