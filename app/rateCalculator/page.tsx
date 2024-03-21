'use client'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import Image from 'next/image';
import React from 'react'

function RateCalculator() {
  const orders = [
    {
      orderId: "123456",
      date: "28 March 2024 | 5.20 pm",
      rtoCharges: "₹464.72",
      customerName: "Ram Ganesh",
      packageDetails: "Dead Weight\n10.00 x 10.00 x 10.00\nVolumetric wt. 0.200kg",
      paymentMethod: "COD"
    },
    {
      orderId: "123456",
      date: "28 March 2024 | 5.20 pm",
      rtoCharges: "₹464.72",
      customerName: "Ram Ganesh",
      packageDetails: "Dead Weight\n10.00 x 10.00 x 10.00\nVolumetric wt. 0.200kg",
      paymentMethod: "COD"
    },
    {
      orderId: "123456",
      date: "28 March 2024 | 5.20 pm",
      rtoCharges: "₹464.72",
      customerName: "Ram Ganesh",
      packageDetails: "Dead Weight\n10.00 x 10.00 x 10.00\nVolumetric wt. 0.200kg",
      paymentMethod: "COD"
    },
    {
      orderId: "123456",
      date: "28 March 2024 | 5.20 pm",
      rtoCharges: "₹464.72",
      customerName: "Ram Ganesh",
      packageDetails: "Dead Weight\n10.00 x 10.00 x 10.00\nVolumetric wt. 0.200kg",
      paymentMethod: "COD"
    },
    {
      orderId: "123456",
      date: "28 March 2024 | 5.20 pm",
      rtoCharges: "₹464.72",
      customerName: "Ram Ganesh",
      packageDetails: "Dead Weight\n10.00 x 10.00 x 10.00\nVolumetric wt. 0.200kg",
      paymentMethod: "COD"
    },
  ];

  return (
    <>
      <div className='flex gap-4 border-b-4 border-gray-300 text-lg font-semibold mb-6'>
        <div>Domestic</div>
        <div className='border-b-4 border-[#E94C69] z-10 mb-[-4px]'>International</div>
      </div>
      <div className='bg-white rounded-lg shadow-md h-full p-3 md:p-8'>
          <div className='flex flex-wrap mb-4 mx-[-12px]'>
            <div className='w-full  md:max-w-[50%] lg:max-w-[33.33%] px-3'>
              <InputField 
                labelText='Pickup Pincode' 
                value={"text"} 
                onChange={() => {console.log('hi')}}
              />
            </div>
            <div className='w-full  md:max-w-[50%] lg:max-w-[33.33%]  px-3'>
              <InputField 
                labelText='Delivery Pincode' 
                value={"text"} 
                onChange={() => {console.log('hi')}}
              />
            </div>
            <div className='w-full  md:max-w-[50%] lg:max-w-[33.33%] px-3'>
              <div>Package dimensions (L * B * H)</div>
              <div className='flex mx-[-8px]'>
                <div className='w-full  md:max-w-[50%] lg:max-w-[33.33%]  px-2'>
                  <InputField 
                  value={"text"} 
                  onChange={() => {console.log('hi')}}
                />
                </div>
                <div className='w-full  md:max-w-[50%] lg:max-w-[33.33%]  px-2'>
                  <InputField 
                  value={"text"} 
                  onChange={() => {console.log('hi')}}
                />
                </div>
                <div className='w-full  md:max-w-[50%] lg:max-w-[33.33%]  px-2'>
                  <InputField 
                  value={"text"} 
                  onChange={() => {console.log('hi')}}
                />
                </div>
              </div>
            </div>
            <div className='w-full  md:max-w-[50%] lg:max-w-[33.33%]  px-3'>
              <InputField 
                labelText='Actual Weight' 
                value={"text"} 
                onChange={() => {console.log('hi')}}
              />
            </div>
            <div className='w-full  md:max-w-[50%] lg:max-w-[33.33%]  px-3'>
              <InputField 
                labelText='Shipping Purpose' 
                value={"text"} 
                onChange={() => {console.log('hi')}}
              />
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:justify-end mb-4'>
            <Button buttonText="Filter" outlineButton={true} className='mb-3 md:mr-4'/>
            <Button buttonText="Filter"/>
          </div>
          <div className='overflow-x-auto'>
            <table className="min-w-[1200px] w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr className='border-t border-b border-gray-700'>
                      <th className="px-6 py-3">COURIER PARTNER</th>
                      <th className="px-6 py-3">RATING</th>
                      <th className="px-6 py-3">ESTIMATED DELIVERY</th>
                      <th className="px-6 py-3 text-center">CHARGEABLE WEIGHT</th>
                      <th className="px-6 py-3 text-center">CHARGES</th>
                      <th className="px-6 py-3 text-center">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index} className="bg-white border-b border-gray-300 hover:bg-slate-200 cursor-pointer">
                      
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex justify-center items-center">
                        <Image 
                          src={'https://placehold.jp/150x150.png'} 
                          width="80" 
                          height="80" 
                          alt="company logo"
                          className='rounded-full mr-3 block'
                        />
                        <div>
                          <p>{order.orderId}</p>
                          <p>{order.date}</p>
                          <p>RTO Charges: {order.rtoCharges}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{order.customerName}</td>
                      
                      <td className="px-6 py-4">
                        <p>{order.packageDetails}</p>
                      </td>
                      <td className="px-6 py-4 text-center">{order.paymentMethod}</td>

                      <td className="px-6 py-4 text-center">
                        <p>Hello</p>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <div className='flex mx-auto w-fit'>
                          <Button buttonText='Ship Now' />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
      </div>
    </>
  )
}

export default RateCalculator