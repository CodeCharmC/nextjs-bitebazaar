'use client';

import {
  AtSymbolIcon,
  KeyIcon,
  PhoneIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { Button } from './button';
import { useState } from 'react';

export default function LoginForm() {
  const [usePhone, setUsePhone] = useState(false);

  return (
    <form className="w-full max-w-md space-y-6 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 p-8 rounded-xl shadow-lg">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        Welcome Back to <span className="text-orange-500">Bite</span>
        <span className="text-purple-500">Bazaar</span>
      </h1>
      <p className="text-sm text-gray-600 text-center">
        Log in to your account to enjoy delicious food at your fingertips.
      </p>

      {/* Toggle Login Method */}
      <div className="flex justify-center gap-4">
        <button
          type="button"
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            !usePhone
              ? 'bg-purple-600 text-white'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
          onClick={() => setUsePhone(false)}
        >
          Use Email
        </button>
        <button
          type="button"
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            usePhone
              ? 'bg-orange-500 text-white'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
          onClick={() => setUsePhone(true)}
        >
          Use Phone
        </button>
      </div>

      {/* Login Form Fields */}
      <div>
        {!usePhone ? (
          <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 p-3 pl-10 shadow-sm focus:ring-purple-500 focus:border-purple-500"
                required
              />
              <AtSymbolIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-300 p-3 pl-10 shadow-sm focus:ring-purple-500 focus:border-purple-500"
                required
              />
              <KeyIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          </div>
        ) : (
          <div className="space-y-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <div className="relative">
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full rounded-lg border border-gray-300 p-3 pl-10 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                required
              />
              <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div> 
              
          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-300 p-3 pl-10 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                required
              />
              <KeyIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          </div>  
        )}
      </div>

      {/* Login Button */}
      <Button
        className="w-full bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 hover:from-purple-700 hover:to-yellow-600 text-white font-semibold py-3 flex items-center justify-center"
        type="submit"
      >
        Log In <ArrowRightIcon className="ml-2 h-5 w-5" />
      </Button>

      {/* Footer */}
      <p className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <a href="/register" className="text-purple-500 hover:underline">
          Sign up here
        </a>
      </p>
    </form>
  );
}
