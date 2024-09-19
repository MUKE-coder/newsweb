"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ErrorPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start justify-between">
           <Image width={281} height={281} className='' src="/images/image.png" alt="error" />
            <div className="md:ml-16 text-center md:text-left">
              <h1 className="text-6xl font-bold text-blue-600 mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>Opps!</h1>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                We Can{"'"}t Seem to Find The Page You{"'"}re Looking For.
              </h2>
              <p className="text-gray-600 mb-8">
                Oops! The page you are looking for does not exist. It might have been moved or deleted.
              </p>
              <Link href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Go To Home
              </Link>
            </div>
          </div>
        </div>
      )
}
