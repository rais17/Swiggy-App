import React from 'react'
import { FAQ } from './constant'
import FAQS from './FAQS'

const Help = () => {
  return (
    <div className="w-11/12 mx-auto min-h-screen max-w-[1100px] my-5">
      <h1 className="py-5 text-center font-sans text-2xl font-bold bg-[#0F172A] text-white">
        FAQS
      </h1>
      <div className="flex flex-col">
        {FAQ.map((item) => {
          return <FAQS key={item?.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Help