import React from "react";
import { metadata } from "./metadata";
import Button from "./button";
import { prisma } from "@/prisma";
import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";
import Script from "next/script";
// import { randomUUID } from "crypto";
// import Mailgun from 'mailgun-js';
// import formData from 'form-data';

// const API_KEY = process.env.MAILGUN_API_KEY || ''
// const DOMAIN = process.env.MAILGUN_DOMAIN || ''

export default function WaitingList() {
  async function registerUser(data: FormData) {
    "use server";
    console.log("DATA", data);

    try {
      const user = await prisma.user.create({
        data: {
          name: data.get("name") as string,
          email: data.get("email") as string,
          phone: data.get("contact") as string,
        },
      });
      // redirect('/successful');
    } catch (error: any) {
      if (error?.code === "P2002") {
        // redirect('/successful');
      } else {
        // Handle other errors
        // redirect('/successful');
      }
    }
  }
  //       <------------ TOKEN GENERATION ----------------> to be included inside the try block

  // const token = await prisma.activateToken.create({
  //     data: {
  //         token:`${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
  //         userId: user.id,
  //     }
  // })
  //       <------------ SENDING VERIFICATION EMAIL ----------------> to be included inside the try block

  // const mailgun = new Mailgun({ apiKey: API_KEY, domain: DOMAIN })

  // const messageData = {
  //     from: `Swapso <hello@${DOMAIN}>`,
  //     to: user.email,
  //     subject: 'Please verify your email',
  //     text:`Hello ${user.name}, please verify your email by clicking this link: http://localhost:3000/activate/${token.token}`
  // }
  // mailgun.messages().send(messageData, (error, body) => {
  //     if (error) {
  //         console.error('Error sending email:', error);
  //     } else {
  //         console.log('Email sent successfully:', body);
  //     }
  // });

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <Script
        id="ga-script"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-21492NPCH3"
      ></Script>
      <Script id="ga-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-21492NPCH3');
        `}
      </Script>
      <div className="text-center">
        <h1 className="text-gray-500 text-2xl">Join the waitlist to</h1>
        <h1 className="text-2xl">
          Experience the World&apos;s{" "}
          <span className="text-blue-200"> 1st Decentralized</span>
          <span className="text-blue-300"> EdTech Platform</span>
        </h1>
        <form action={registerUser} className="mt-8">
          <div className="flex flex-col items-center">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-80 mt-4 rounded-md text-white bg-gray-900 p-2"
              required
            />
            <input
              type="tel"
              name="contact"
              placeholder="Phone Number"
              className="w-80 mt-4 rounded-md text-white bg-gray-900 p-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-80 mt-4 rounded-md text-white bg-gray-900 p-2"
              required
            />
            {/* <button
                    className="w-80 bg-gray-900 p-2 rounded-md mt-8 text-blue-400 transform transition-transform hover:scale-105 hover:bg-purple-900"
                    type="submit"
                >
                    Join waiting list ➔
                </button> */}
            <Button />
            <p className="mt-12 text-gray-500">500+ joined till now</p>
            <button className="bg-blue-900 rounded-lg p-2 mt-4 transform transition-transform hover:scale-105 hover:opacity-90">
              <a href="https://swapso.io/">Return Back to Home Page</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
