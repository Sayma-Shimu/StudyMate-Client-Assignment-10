import React from 'react'
import error from '../assets/error-404.png'
const ErrorPage = () => {
  return (
    <div className='flex justify-center items-center mt-14'>
        <img src={error} alt="" />
    </div>
  )
}

export default ErrorPage