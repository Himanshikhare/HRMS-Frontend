import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

const About = () => {
    return (
        <div>
            <Navbar />
            <Card className='w-100% h-30 mt-5 bg-[lightgray] border hover:bg-[pink] hover:cursor-pointer hover:shadow-md hover:shadow-[red]'>
                <CardHeader>
                    <CardTitle className='text-center font-bold text-xl'>OUR MISSION</CardTitle>
                    <CardDescription className='text-md font-medium'>At HR Cloud, our mission is to revolutionize workforce management by providing intuitive,
                        efficient, and user-centric solutions. We aim to empower businesses to manage their human
                        resources seamlessly, enhancing productivity and employee satisfaction.</CardDescription>
                </CardHeader>

            </Card>
            <Card className='w-100% h-30 mt-5 bg-[lightgray] border hover:bg-[pink] hover:cursor-pointer hover:shadow-md hover:shadow-[red]'>
                <CardHeader>
                    <CardTitle className='text-center font-bold text-xl'>OUR VISSION</CardTitle>
                    <CardDescription className='text-md font-medium'> We envision a future where HR operations are completely digitized, offering real-time insights
                        and fostering a culture of innovation. By leveraging cutting-edge technology, we aim to be the
                        catalyst for transformative workplace experiences.</CardDescription>
                </CardHeader>

            </Card>

            <h1 className='text-center mt-10 font-bold text-4xl'>Why HR Clouds Exists?</h1>
            <Card className='w-100% h-50 mt-5 bg-[lightgray] border hover:bg-[lightgreen] hover:cursor-pointer hover:shadow-md hover:shadow-[green]'>
                <CardHeader>
                    <CardDescription className='text-md font-medium'> <ul>
                        <li>1. Streamlined Processes: Automate routine HR tasks like payroll, attendance tracking, and performance management to save time and reduce errors.</li>
                        <li>2. Employee-Centric: Provide your employees with an intuitive self-service portal where they can access personal information, request leaves, and track their performance.</li>
                        <li>3. Comprehensive Solutions: From recruitment and onboarding to performance reviews and learning development, our HRMS covers every aspect of HR management.</li>
                        <li>4. Data-Driven Insights: Get actionable insights into your workforce with detailed reports and analytics, helping you make informed decisions and improve overall organizational efficiency.</li>

                    </ul></CardDescription>
                </CardHeader>

            </Card>
            {/* Brand Values */}
            <div className="max-w-6xl mx-auto mb-10 mt-10">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-[lightgreen]">
                        <h3 className="text-xl font-semibold text-green-600 mb-2">Innovation</h3>
                        <p className="text-gray-600">
                            Embracing technology to develop creative solutions for modern HR challenges.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-[lightgreen]">
                        <h3 className="text-xl font-semibold text-green-600 mb-2">Integrity</h3>
                        <p className="text-gray-600">
                            Upholding transparency and ethical practices in every decision and action.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-[lightgreen]">
                        <h3 className="text-xl font-semibold text-green-600 mb-2">Excellence</h3>
                        <p className="text-gray-600">
                            Delivering the highest quality solutions and services to exceed client expectations.
                        </p>
                    </div>
                </div>
            </div>
            {/*Team*/}
            <div className="max-w-6xl mx-auto mb-10 mt-10">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Team Member 1 */}
                    <div className="bg-white border p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:shadow-[blue]">

                        <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
                        <p className="text-sm text-blue-600">CEO & Founder</p>
                        <p className="text-gray-600 mt-2">
                            A visionary leader passionate about simplifying HR management with innovative solutions.
                        </p>
                    </div>
                    {/* Team Member 2 */}
                    <div className="bg-white p-6 border rounded-lg shadow-md text-center hover:shadow-lg hover:shadow-[blue]">
                        <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
                        <p className="text-sm text-blue-600">CTO</p>
                        <p className="text-gray-600 mt-2">
                            Driving technological advancements to deliver cutting-edge HR solutions.
                        </p>
                    </div>
                    {/* Team Member 3 */}
                    <div className="bg-white p-6 border rounded-lg shadow-md text-center hover:shadow-lg hover:shadow-[blue]">
                        <h3 className="text-xl font-semibold text-gray-800">Emily Clark</h3>
                        <p className="text-sm text-blue-600">Head of Operations</p>
                        <p className="text-gray-600 mt-2">
                            Ensuring seamless integration and exceptional client service at every step.
                        </p>
                    </div>
                </div>
            </div>
            {/* Optional: Recognition/Press */}
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 text-center x mb-5 ">Recognition</h2>
                <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-md hover:shadow-[black] mb-4">
                    <p className="text-gray-600">
                        We’re proud to have been featured in leading industry publications like <em>TechCrunch</em>,
                        <em>Forbes</em>, and <em>HR Today</em> for our innovative approach to workforce management.
                    </p>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default About