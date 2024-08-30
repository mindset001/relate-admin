'use client'
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Input, Modal } from 'antd';
import Image from 'next/image';
import Robot from '../../../../public/images/robot.jpg'
const initialValues = {
  email: '',
  password: '',
};

function Login () {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');

  const handleLogin = (e:any) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email is required');
      return;
    }

    // Implement login logic here

    console.log('Logging in with:', { email, password });
  };

  return (
    <main className='login flex justify-center items-center '>
        <div className='w-[90%] md:w-[70%] md:h-[80%] flex items-center rounded-lg'>
          <div className='hidden md:block w-[50%]  h-[100%]'>
            <Image src={Robot} alt='' className='h-full'/>
          </div>
          <div className="w-full md:w-[50%] flex flex-col items-center justify-center ">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg ">
        <h2 className="text-2xl font-semibold">Welcome Back!</h2>
        <p className="text-gray-600">Sign in to continue to Hubbly.</p>
        
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={`appearance-none block w-full px-3 py-2 border ${
                error ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-[12px] md:text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="w-full text-[12px] md:text-sm">
           
                <p className="font-medium text-[#D024C2] hover:text-indigo-500 cursor-pointer"  onClick={() => setIsModalVisible(true)}>
                  Forgot your password?
                </p>
           
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#D024C2] hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Link href='/dashboard'>Sign In</Link>
            </button>
          </div>
        </form>

      
      </div>
    </div>
        </div>

         {/* Forgot Password Modal */}
      <Modal
        title="Forgot Password"
        open={isModalVisible}
        // onOk={handleForgotPassword}
        onCancel={() => setIsModalVisible(false)}
        okText="Send Reset Link"
        cancelText="Cancel"
      >
        <p>Please enter your email address to receive a password reset link.</p>
        <Input
          placeholder="Enter your email"
          value={forgotEmail}
          onChange={(e) => setForgotEmail(e.target.value)}
        />
      </Modal>
    </main>
  )
}

export default Login