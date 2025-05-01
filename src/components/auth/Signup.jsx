import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: ""
    });
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();    //formdata object
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
        finally{
            dispatch(setLoading(false));
        }
    }
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Signup</h1>
                    <div>
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            value={input.fullName}
                            name="fullName"
                            onChange={changeEventHandler}
                            placeholder="enter your full name"
                        />
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="abc2s@gmail.com"
                        />
                    </div>
                    <div>
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                            placeholder="00000-22222"
                        />
                    </div>
                    <div>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="password"
                        />
                    </div>
                    <div classNmae='flex justify-between item-center'>
                        <RadioGroup className='flex items-center gap-4 my-5'>
                            <div className="flex items-center space-x-2">
                               <Input
                                    type="radio"
                                    name="role"
                                    value="HR"
                                    className="cursor-pointer"
                               />
                               <Label  htmlFor="r1">HR</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                            <Input
                                    type="radio"
                                    name="role"
                                    value="Employee"
                                    className="cursor-pointer"
                               />
                                <Label htmlFor="r2">Employee</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <Button type="submit" className="w-full my-4">Signup</Button>
                    <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>

                </form>
            </div>

        </div>
    )
}

export default Signup