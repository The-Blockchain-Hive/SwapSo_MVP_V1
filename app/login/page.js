// LoginPage.js
'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UserAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const Router = useRouter();
  const { user, googleSignIn, logOut, Login} = UserAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
       const response = await Login(email,password);
       console.log(response);
    }catch (error){
      console.log(error);
    }    
    Router.push('/');
  };

  const handleGoogleLogin = async(e) =>{
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
      window.location.href='/';
    }
}, [user]);

  return (
    <div className="max-w-md mx-auto p-8 bg-opacity-80 bg-black rounded-lg text-white text-center">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
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
      <button onClick={handleLogin} className="w-full py-2 px-4 bg-blue-500 text-white rounded cursor-pointer transition-colors duration-300 mb-4">
        Log In
      </button>
      <button onClick={handleGoogleLogin} className="w-full py-2 px-4 bg-blue-500 text-white rounded cursor-pointer transition-colors duration-300">
        Log In with Google
      </button>
      <p className="mt-4">
        New Here?{' '}
        <Link href="/signup">
          <p className="text-blue-500 hover:underline">Sign Up here</p>
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
