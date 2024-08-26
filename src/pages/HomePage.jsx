import AbsorbesItems from '@/components/ui-components/AbsorbesItems'
import BrakeDisks from '@/components/ui-components/BrakeDisks'
import DealsOffers from '@/components/ui-components/DealsOffers'
import HomePageBanner from '@/components/ui-components/HomePageBanner'
import RecomendedItems from '@/components/ui-components/RecomendedItems'
import RequestSendingBanner from '@/components/ui-components/RequestSendingBanner'
import Subscribe from '@/components/ui-components/Subscribe'
import React, { useEffect, useState } from 'react'
import data from '../data/offers.json'

import AOS from 'aos';
import 'aos/dist/aos.css'


export default function HomePage() {
  const [offers, setOffers] = useState(data);

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  },[])

  return (
    <>
      <div className=" md:container lg:px-12 px-[15px]">
        <div className='bg-[rgb(248,249,250)]'>
          {/* space */}
          <div className='w-full h-1 mb-4 sm:mb-8'></div>
          <div data-aos="fade-up">
            <HomePageBanner/>
          </div>
          <div data-aos="fade-up" className='my-4'>
            <DealsOffers offers={offers}/>
          </div>
          <div data-aos="fade-up" className='my-4'>
            <AbsorbesItems absorbes={offers}/>
          </div>
          <div data-aos="fade-up" className='my-4'>
            <BrakeDisks brakediscs={offers}/>
          </div>
          <div data-aos="fade-up" className='my-8'>
            <RequestSendingBanner/>
          </div>
          <div data-aos="fade-up" className='mt-8 mb-24'>
            <RecomendedItems recommenddedparts={offers}/>
          </div>
        </div>
      </div>
      {/* Subscribe */}
      <div data-aos="fade-up" className=''>
        <Subscribe/>
      </div>
    </>
  )
}
