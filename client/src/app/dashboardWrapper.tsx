import React from 'react'
import Navbar from "@/app/(components)/Navbar"
const dashboardWrapper = ({children} :{children: React.ReactNode}) => {
  return (
    <div className='flex min-h-screen w-full bg-grey-50 text-gray-100'>
      {/* Sidebar */}
      sidebar
      <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64`}>
      {/* navbar   */}
      <Navbar/>
      {children}
      </main>
    </div>
  )
}

export default dashboardWrapper
