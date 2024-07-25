import React from 'react'
import Header from './Header'
import sideimage from '../images/sidebarimage.png'

const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center from-[#C7C5E1] via-[#C6E1D4] to-[#DDDDDD] bg-gradient-to-r' style={{
        // backgroundImage: "url('https://icandsr.iitm.ac.in/assets/img/IITMadras.jpg')",
    }}>
        {/* <Header/> */}
        {/* <div className='absolute'>
        <img 
        src='https://icandsr.iitm.ac.in/assets/img/IITMadras.jpg'
         alt='background'/>
         </div> */}

         {/* <form className='absolute p-12 bg-white shadow-lg border rounded w-3/12 my-36 mx-auto left-0 right-0 bg-opacity-80'>
            <h1 className='text-3xl text-white font-bold py-4'>Sign In</h1>
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-[#141414] bg-transparent-700 rounded-sm'/>
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-[#141414] bg-transparent-700 rounded-sm'/>
            <button className='p-4 my-6 bg-red-600 text-white w-full rounded-sm'>Sign In</button>
            <p className='p-0 text-white text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
         </form> */}

         <div className='flex h-[80vh] rounded-2xl overflow-hidden shadow bg-white w-5/6'>
            <div className='w-full p-5 px-20'>
                <div className='w-full'>
                    <img className='w-36' src='https://study.iitm.ac.in/ds/assets/img/IITMOD-Logo.svg' alt='background'/>
                    <div className='mt-20'>
                        <p className='text-2xl font-semibold'>Welcome Back!</p>
                        <p className='mt-2 text-base font-extralight'>Sign in to continue to your account</p>
                       
                    </div>
                    <div className='mt-10'>
                        <input className='hover:outline-none focus:outline-none px-5 py-4 w-full border rounded-md text-sm font-light' type='email' placeholder='Email'/>
                        <input className='hover:outline-none focus:outline-none px-5 py-4 w-full border rounded-md text-sm font-light mt-3' type='password' placeholder='Password'/>
                        <button className='bg-black w-full text-white text-sm p-5 rounded-md mt-3'>Sign In</button>
                    </div>
                    <div className='flex items-center mt-5'>
                        <hr className='w-full'/>
                        <p className='w-1/2 text-center text-sm text-gray-700 font-extralight'>or continue</p>
                        <hr className='w-full'/>
                        
                    </div>
                    <button className='flex justify-center items-center gap-2 border border-gray-900 w-full text-black text-sm p-5 rounded-md mt-3'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png' className='w-5'/>Login With Google</button>

                </div>
            </div>
            <div className='w-full p-3 '>
                <div className='h-full rounded-xl overflow-hidden rounded-es-[60px]'>

                <img className='w-full h-3/4 object-cover' src={sideimage} alt='background'/>
                <div className='h-full from-[#171313] bg-gradient-to-b to-black w-full pt-5'>
                    <p className='text-white text-center font-extralight px-10'> Registered learners who have been provided with a student email ID, which is google enabled, should sign-in using their student email ID.</p>
                </div>
                </div>
            </div>
         </div>

        
        
        </div>
  )
}

export default Login