// SignUpPage.js
'use client'
// SignUpPage.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { UserAuth } from "../context/AuthContext";
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { user, googleSignIn, LogOut, Register } = UserAuth();
  const [loading, setLoading] = useState(true);
  const Router = useRouter();

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    try {
      await Register(email, username, password);

    } catch (error) {
      console.log(error);
    }
    Router.push('/');
  };

  const handleGoogleSignUp = async (e: any) => {
    e.preventDefault();
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
    Router.push('/');
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    };
    checkAuthentication();
    if (!loading) {
      Router.push('/');
    }
  }, [user, Router, loading]);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-10">
            <h1 className="h1">WELCOME!</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <button onClick={handleGoogleSignUp} className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                    <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                    </svg>
                    <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                    <span className="flex-auto pl-16 pr-8 -ml-16">Sign in with Google</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="flex items-center my-6">
              <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
              <div className="text-gray-400">Or, sign in with your email</div>
              <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
            </div>
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email<span className="text-red-600">*</span></label>
                  <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input w-full text-gray-300" placeholder="you@youruniversity.com" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                  <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" required />
                </div>
              </div>
<div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="confirmPassword">Confirm Password <span className="text-red-600">*</span></label>
                  <input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-input w-full text-gray-300" placeholder="Confirm Password" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button onClick={handleSignUp} className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign Up</button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              Already Registered? <Link href="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign in</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SignUpPage;