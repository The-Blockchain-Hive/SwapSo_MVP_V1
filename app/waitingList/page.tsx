import React from "react";
import { prisma } from '@/lib/prisma'

export default function WaitingList() {

    async function registerUser(data: FormData){
        'use server'
        console.log('DATA', data)

        const user = await prisma.user.create({
            data: {
               name: data.get('name') as string,
               email: data.get('email') as string,
            }
        })
    }

    return (
        <div className="h-screen w-screen justify-center items-center bg-slate-100">
            <h1 className="text-black">Join our Waiting List!!!</h1>
            <p className="text-black">Hello</p>
            <form action={registerUser}>
            <div className="h-1/2 w-2/3 bg-blue-900 mx-auto mt-48 rounded-lg">
                <input 
                type="text" 
                name="name"
                placeholder="write your name..." 
                className="ml-8 w-96 mt-16 rounded-md text-black"
                />
                <input 
                type="email" 
                name="email"
                placeholder="Your email..." 
                className="ml-8 w-96 mt-16 rounded-md text-black"
                />
                <button
                 className="bg-blue-1100 p-2 rounded-md mt-12 ml-36"
                 type="submit"
                >
                    Join waiting list
                </button>
            </div>
            </form>
        </div>
    )
}
