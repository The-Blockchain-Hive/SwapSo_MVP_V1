'use client'
import React from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Button() {

  const diffToast = () => {
    toast('Successfully joined waiting list')
  }
  return (
    <>
    <div>
      <button
        className="w-80 bg-gray-900 p-2 rounded-md mt-8 text-blue-400 transform transition-transform hover:scale-105 hover:bg-purple-900"
        type="submit"
        onClick={diffToast}
        >
            Join waiting list ➔
        </button>
    </div>
    <ToastContainer />
    </>
  )
}
