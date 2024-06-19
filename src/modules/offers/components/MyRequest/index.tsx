import React from 'react'
import Accordion from './components/Accordion'
import useMyRequest from './useMyRequest'

const MyRequest = () => {

const {allRequest, allOrderRequest} = useMyRequest();

  return (
   <div className='flex flex-col gap-6 min-h-[100vh] px-[14px] py-6'>

    <div>
        <p className='text-[32px] font-bold'>My Request</p>
    </div>

    <div className='px-7'>
      <div>
        <p className='text-[28px] font-bold'>Order Request</p>
      </div>
      <div className='flex flex-col gap-2'>
      {
        allOrderRequest.map((item:any, index:any) => {
          return (
            <Accordion key={index}/>
          )
        })
      }
      </div>
      
       
    </div>
   </div>
  )
}

export default MyRequest