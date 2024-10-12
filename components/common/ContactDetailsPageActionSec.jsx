"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ArrowLeft, Edit2, Star, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import UpdateModal from '../shared/UpdateModal'

const ContactDetailsPageActionSec = ({ contact, session }) => {
    const router = useRouter()
    const [showUpdateModal, setShowUpdateModal] = useState(false)

    return (
        <div className='flex justify-between items-center mb-6'>
            <Button onClick={() => router.back()} size="icon" variant="ghost" className="rounded-full"><ArrowLeft className='size-5' /></Button>
            <div>
                {/* favorite */}
                <Button size="icon" variant="ghost" className="rounded-full" ><Star className='size-5' /></Button>
                {/* Edit */}
                <Button onClick={() => setShowUpdateModal(true)} size="icon" variant="ghost" className="rounded-full" ><Edit2 className='size-5' /></Button>
                {/* Delete */}
                <Button size="icon" variant="ghost" className="rounded-full" ><Trash className='size-5' /></Button>
            </div>
            <UpdateModal
                contact={contact}
                open={showUpdateModal}
                setOpen={setShowUpdateModal}
                userId={session?.user?.id}
            />
        </div>
    )
}

export default ContactDetailsPageActionSec