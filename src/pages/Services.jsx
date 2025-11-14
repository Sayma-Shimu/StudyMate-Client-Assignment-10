import React from 'react'
import banner4 from '../assets/care.jpg'
const Services = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <img className=' object-cover mb-5' src={banner4} alt="" />


      
      <div className='mt-8 p-2'>
        <p className='mt-4 mb-2 font-semibold text-2xl '>We provide the following services: </p>
        <p className='text-left text-sm '><span className='font-semibold'>1.</span> Nutritious food and clean water every day. </p>
        <p className='text-left text-sm'><span className='font-semibold'>2.</span> Regular bathing and grooming (hair trimming, nail cutting, and brushing).</p>
        <p className='text-left text-sm'><span className='font-semibold'>3.</span> Health check-ups and vaccinations by professional veterinarians.</p>
        <p className='text-left text-sm'><span className='font-semibold'>4.</span> Daily playtime and exercise to keep them active and happy. </p>
        <p className='text-left text-sm'><span className='font-semibold'>5.</span> A clean, comfortable, and safe environment for all pets to stay in.</p>
      </div>

      <p className='mt-3 font-semibold text-sm p-2'> We treat every pet like a family member, ensuring they stay safe, healthy, and happy. ❤️</p>

    </div>
  )
}

export default Services