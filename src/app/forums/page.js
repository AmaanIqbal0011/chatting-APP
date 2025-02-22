import Forum from '@/components/forum'
import React from 'react'
import { BoxesCore } from '@/components/ui/background-boxes'
import FloatingNavDemo from '@/components/floating-nav'

const Forums = () => {
  return (
    <div className='relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <BoxesCore />
      <Forum />
     <FloatingNavDemo />
    </div>
  )
}

export default Forums