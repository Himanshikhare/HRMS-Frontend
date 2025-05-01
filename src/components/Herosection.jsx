import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const Herosection = () => {
  return (
    <div className='text-center'>
      <div className='flex flex-col gap-5 my-10'>
        <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[blue] font-medium'>Human Resource Management System</span>
        <h1 className='text-5xl font-bold'>Simplify HR processes, <br /> <span className='text-[blue]'>maximize productivity.</span></h1>
        <p>Empowering HR with cloud-driven efficiency for smarter, faster, and seamless workforce management</p>
        <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto mt-25'>
          <input
            type="text"
            placeholder='search here...'
            onChange={(e) => setQuery(e.target.value)}
            className='outline-none border-none w-full'

          />
          <Button className="rounded-r-full bg-[blue]">
            <Search className='h-5 w-5' />
          </Button>
        </div>
      


        <div class="grid grid-cols-1 md:grid-cols-3 gap-60 py-10 ">
          <div class="text-center">
            <h3 class="font-bold">Automated Payroll</h3>
            <p>Save time and ensure accuracy with our automated payroll system.</p>
          </div>
          <div class="text-center">
            <h3 class="font-bold">Performance Tracking</h3>
            <p>Monitor and enhance employee performance with real-time insights.</p>
          </div>
          <div class="text-center">
            <h3 class="font-bold">Attendance Management</h3>
            <p>Track employee attendance effortlessly.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection