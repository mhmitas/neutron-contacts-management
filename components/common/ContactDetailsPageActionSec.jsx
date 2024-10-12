"use client"

import React from 'react'
import { Button } from '../ui/button'
import { ArrowLeft, Edit2, Star, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'

const ContactDetailsPageActionSec = () => {
    const router = useRouter()

    return (
        <div className='flex justify-between items-center mb-6'>
            <Button onClick={() => router.back()} size="icon" variant="ghost" className="rounded-full"><ArrowLeft className='size-5' /></Button>
            <div>
                <Button size="icon" variant="ghost" className="rounded-full" ><Star className='size-5' /></Button>
                <Button size="icon" variant="ghost" className="rounded-full" ><Edit2 className='size-5' /></Button>
                <Button size="icon" variant="ghost" className="rounded-full" ><Trash className='size-5' /></Button>
            </div>
        </div>
    )
}

export default ContactDetailsPageActionSec