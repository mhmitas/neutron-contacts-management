"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ArrowLeft, Edit2, Star, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import UpdateModal from '../shared/UpdateModal'
import askConfirm from '../shared/confirmModals/askConfirm'
import { deleteContact } from '@/lib/actions/contact.actions'
import toast from 'react-hot-toast'

const ContactDetailsPageActionSec = ({ contact, session }) => {
    const router = useRouter()
    const [showUpdateModal, setShowUpdateModal] = useState(false)

    async function handleDelete() {
        try {
            const ask = await askConfirm("Are you sure you want to delete this contact?")
            if (!ask) return;

            const res = await deleteContact({ contactId: contact?._id })

            if (res?.error) {
                return toast.error(res?.error)
            }
            if (res?.success) {
                // target: details page to home
                router.push('/')
            }
        } catch (error) {
            // console.error(error)
            toast.error(error?.message || "Something went wrong")
        }
    }

    return (
        <div className='flex justify-between items-center mb-6'>
            <Button onClick={() => router.back()} size="icon" variant="ghost" className="rounded-full"><ArrowLeft className='size-5' /></Button>
            <div>
                {/* favorite */}
                <Button size="icon" variant="ghost" className="rounded-full" ><Star className='size-5' /></Button>
                {/* Edit */}
                <Button onClick={() => setShowUpdateModal(true)} size="icon" variant="ghost" className="rounded-full" ><Edit2 className='size-5' /></Button>
                {/* Delete */}
                <Button onClick={handleDelete} size="icon" variant="ghost" className="rounded-full" ><Trash className='size-5' /></Button>
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