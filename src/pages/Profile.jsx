import React from 'react'
import { use } from 'react';
import { AuthContext } from '../components/provider/AuthProvider';
import { Link } from 'react-router';

const Profile = () => {
 const { user } = use(AuthContext)
   
  return (
    <div>
       <title>Profile</title>       
            <div className='mt-10 flex justify-center items-center space-y-5'>
                <div className='bg-gray-200 px-5 py-3 rounded-lg'>

                    <div className='font-semibold text-center'>
                         <img className='mx-auto mb-4' src={user?.photoURL} alt="" />

                        <p>Name:- {user?.displayName}</p>
                        <p>Email:- {user?.email}</p>
                       
                    </div>

                    <div className='flex justify-center'>
                        <Link to='/editprofile'><button className='btn bg-blue-600 text-white mt-4'>Edit Profile</button></Link>
                    </div>

                </div>
            </div>
    </div>
)}

export default Profile