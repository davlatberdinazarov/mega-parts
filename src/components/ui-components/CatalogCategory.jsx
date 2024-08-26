import { ShoppingCartContext } from '@/layout/MainLayout';
import { useContext, useEffect, useState } from 'react';
import { VerticalTabs } from './VerticalTabs';

import AOS from 'aos';
import 'aos/dist/aos.css'

export default function CatalogCategory () {
  const { isOpen, closeModal } = useContext(ShoppingCartContext);

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  },[])

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div data-aos="fade-up" className="fixed z-30 inset-0 overflow-y-auto">
          <div className="flex items-start justify-center min-h-screen">
            <div onClick={closeModal} className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden py-8 shadow-xl transform transition-all w-screen h-[600px]">
              <div className="md:container lg:px-12 px-[15px] ">
                {/* Modal content */}
                <div className='w-full h-32'></div>
                <VerticalTabs/>
              </div>    
            </div>
          </div>
        </div>
      )}
    </>
  );
};


