import Navbar from '@/components/shared/Navbar'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <div className='flex-grow'>
                {children}
            </div>
        </div>
    )
}

export default Layout