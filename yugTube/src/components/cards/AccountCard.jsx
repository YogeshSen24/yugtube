import React from 'react'
import { CiSettings } from "react-icons/ci";
import { IoAnalytics } from "react-icons/io5";

function AccountCard() {
  return (
    <div className='rounded-3xl w-100 h-1/4 p-5 text-[#EEF0E5] bg-[#163020]'>
      <label className='font-bold text-sm text-[#B6C4B6]' htmlFor=""> Account</label>

      <div className='   my-3 text-sm flex gap-4 items-center'>
      <CiSettings className='text-2xl' /> Settings
      </div>
      <div className='text-sm  my-3 flex gap-4 items-center'>
      <IoAnalytics   className='text-2xl' /> Analytics
      </div>
    </div>
  )
}

export default AccountCard
