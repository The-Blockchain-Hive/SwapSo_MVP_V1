import React from "react";
import { prisma } from '@/prisma';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function WaitingList() {

    async function registerUser(data: FormData){
        'use server'
        console.log('DATA', data)

        const user = await prisma.user.create({
            data: {
               name: data.get('name') as string,
               email: data.get('email') as string,
               phone: data.get('contact') as string,
            }
        })
    }
    const message = () => {
        alert("You have been added to the wait list successfully.")
    }

    return (
        <div className="h-screen flex justify-center items-center bg-black">
    <div className="text-center">
        <h1 className="text-gray-500 text-2xl">Join the waitlist to</h1>
        <h1 className="text-2xl">Experience the World&apos;s <span className="text-blue-200"> 1st Decentralized</span><span className="text-blue-300"> EdTech Platform</span></h1>
        <form action={registerUser} className="mt-8">
            <div className="flex flex-col items-center">
                <input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    className="w-80 mt-4 rounded-md text-white bg-gray-900 p-2"
                />
                <input 
                    type="tel" 
                    name="contact"
                    placeholder="Phone Number" 
                    className="w-80 mt-4 rounded-md text-white bg-gray-900 p-2"
                />
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    className="w-80 mt-4 rounded-md text-white bg-gray-900 p-2"
                /> 
                <button
                    className="w-80 bg-gray-900 p-2 rounded-md mt-8 text-blue-400 transform transition-transform hover:scale-105"
                    type="submit"
                >
                    Join waiting list ➔
                </button>
                <p className="mt-12 text-gray-500">500+ joined till now</p>
            </div>
        </form>
    </div>
</div>

    )
}
