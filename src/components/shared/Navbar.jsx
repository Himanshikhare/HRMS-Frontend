import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import React from 'react'
import { Button } from '../ui/button'
import { LogOut, User } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const user= false;
    return (
        <div className='bg-[skyblue]'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-12'>
                <div>
                    <h1 className='text-3xl font-bold text-[blue]'>HR Clouds</h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex text-l font-medium items-center justify-center gap-7 hover:cursor-default'>

                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>

                    </ul>
                    {
                        !user ? (
                            <div className='flex item-center gap-5'>
                                <Link to="/login"><button variant="outline" className='w-20 border bg-[white] font-medium hover:bg-[lightgreen] hover:shadow-lg hover:shadow-[black] transition-shadow duration-1000'>Login</button></Link>
                                <Link to="/signup"><button className=' w-20 border hover:bg-[pink] hover:shadow-lg hover:shadow-[black] transition-shadow duration-1000 border bg-[white] font-medium'>Signup</button></Link>
                            </div>
                        ):(<Popover>
                            <PopoverTrigger >
                                <Button variant="outline" className="cursor-pointer bg-[white]">Your Profile</Button>
                            </PopoverTrigger>
                            <PopoverContent className=" absolute top-full mt-5 pl-5 left-1/2 transform -translate-x-1/2 bg-white border rounded shadow-lg z-50 ">
                                <div>
                                    <h1 className='font-medium'>Himanshi Khare</h1>
                                    <p className='text-sm'>HR</p>
                                </div>
    
                                <div className='flex flex-col my-2 text-gray-600'>
                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                        <User />
                                        <Button variant="link"> View Profile</Button>
                                    </div>
                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                        <LogOut/>
                                        <Button variant="link"> Log Out</Button>
                                    </div>
    
    
                                </div>
    
                            </PopoverContent>
                        </Popover>)
                        

                    }

                    


                </div>
            </div>


        </div>
    )
}

export default Navbar