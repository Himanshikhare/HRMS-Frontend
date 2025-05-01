import React from 'react'
import Navbar from '../shared/Navbar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Footer from '../shared/Footer'
import { Button } from '../ui/button'

const Services = () => {
    return (
        <div>
            <Navbar />
            <div className='text-center'>
                <h1 className='text-4xl text-[green] font-bold'>Our Services</h1>
                <p className='text-2xl mt-10'>Transforming HR Operations for a Smarter Workforce</p>
            </div>
            
            <div className=' flex flex-wrap ml-10 mt-10 mb-10 gap-5'>
            <Card className='w-80 h-50 bg-[lightgrey] border hover:bg-[pink] hover:cursor-pointer hover:shadow-lg hover:shadow-[red]'>
                <CardHeader>
                    <CardTitle>Employee Management</CardTitle>
                    <CardDescription>Centralized storage of employee data (personal, professional, and employment details)</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button className='bg-[lightblue] hover:cursor-pointer hover:shadow-lg hover:shadow-[black]'>Explore</Button>
                </CardFooter>
            </Card>
            <Card className='w-80 h-50 bg-[lightgrey] border hover:bg-[yellow] hover:cursor-pointer hover:shadow-lg hover:shadow-[red]'>
                <CardHeader>
                    <CardTitle>Payroll Management</CardTitle>
                    <CardDescription>Automated salary calculation, including tax deductions, benefits, and bonuses.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button className='bg-[lightblue] hover:cursor-pointer hover:shadow-lg hover:shadow-[black]'>Explore</Button>
                </CardFooter>
            </Card>
            <Card className='w-80 h-50 bg-[lightgrey] border hover:bg-[pink] hover:cursor-pointer hover:shadow-lg hover:shadow-[red]'>
                <CardHeader>
                    <CardTitle>Attendance and Time Tracking</CardTitle>
                    <CardDescription>Real-time attendance tracking with biometric or RFID integration.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button className='bg-[lightblue] hover:cursor-pointer hover:shadow-lg hover:shadow-[black]'>Explore</Button>
                </CardFooter>
            </Card>
            <Card className='w-80 h-50 bg-[lightgrey] border hover:bg-[yellow] hover:cursor-pointer hover:shadow-lg hover:shadow-[red]'>
                <CardHeader>
                    <CardTitle>Recruitment and Onboarding</CardTitle>
                    <CardDescription>Job posting and applicant tracking system (ATS).</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button className='bg-[lightblue] hover:cursor-pointer hover:shadow-lg hover:shadow-[black]'>Explore</Button>
                </CardFooter>
            </Card>
            <Card className='w-80 h-50 bg-[lightgrey] border hover:bg-[pink] hover:cursor-pointer hover:shadow-lg hover:shadow-[red]'>
                <CardHeader>
                    <CardTitle>Performance Management</CardTitle>
                    <CardDescription>Tools for setting and tracking Key Performance Indicators (KPIs).</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button className='bg-[lightblue] hover:cursor-pointer hover:shadow-lg hover:shadow-[black]'>Explore</Button>
                </CardFooter>
            </Card>
            <Card className='w-80 h-50 bg-[lightgrey] border hover:bg-[yellow] hover:cursor-pointer hover:shadow-lg hover:shadow-[red]'>
                <CardHeader>
                    <CardTitle> Learning and Development</CardTitle>
                    <CardDescription>Training modules and e-learning resources.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button className='bg-[lightblue] hover:cursor-pointer hover:shadow-lg hover:shadow-[black]'>Explore</Button>
                </CardFooter>
            </Card>
            <Card className='w-80 h-50 bg-[lightgrey] border hover:bg-[pink] hover:cursor-pointer hover:shadow-lg hover:shadow-[red]'>
                <CardHeader>
                    <CardTitle>HR Analytics</CardTitle>
                    <CardDescription>Dashboards and reports for workforce analysis.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button className='bg-[lightblue] hover:cursor-pointer hover:shadow-lg hover:shadow-[black]'>Explore</Button>
                </CardFooter>
            </Card>
            
               
            
            </div>
            


        <Footer/>
        </div>
    )
}

export default Services