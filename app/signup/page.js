// SignUpPage.js
'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { UserAuth } from "../context/AuthContext";
import { useRouter } from 'next/navigation'


const SignUpPage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { user, googleSignIn, LogOut, Register } = UserAuth();
  const [loading, setLoading] = useState(true);
  const Router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try{
        await Register(email,username,password);
                   
    }catch(error){
      
        console.log(error);
    }
    Router.push('/');
  };

  const handleGoogleSignUp = async(e) =>{
    e.preventDefault();
    try {
      await googleSignIn();      
    } catch (error) {
      console.log(error);
    }
    Router.push('/');
  }

  useEffect(() => {
    const checkAuthentication = async () => {
    await new Promise((resolve) => setTimeout(resolve, 50));
    setLoading(false);
    };
    checkAuthentication();
    if(loading == false){
        Router.push('/');
    }
}, [user]);


  return (
    <div className="max-w-md mx-auto p-8 bg-opacity-80 bg-black rounded-lg text-white text-center">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full py-2 px-4 mb-4 bg-gray-800 text-white rounded"
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full py-2 px-4 mb-4 bg-gray-800 text-white rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full py-2 px-4 mb-4 bg-gray-800 text-white rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full py-2 px-4 mb-4 bg-gray-800 text-white rounded"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full py-2 px-4 mb-4 bg-gray-800 text-white rounded"
      />
      <button onClick={handleSignUp} className="w-full py-2 px-4 bg-blue-500 text-white rounded cursor-pointer transition-colors duration-300 mb-4">
        Sign Up
      </button>
      <button onClick={handleGoogleSignUp} className="w-full py-2 px-4 bg-blue-500 text-white rounded cursor-pointer transition-colors duration-300">
        Sign Up with Google
      </button>
      <p className="mt-4">
        Already Registered?{' '}
        <Link href="/login">
          <p className="text-blue-500 hover:underline">Sign In here</p>
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
