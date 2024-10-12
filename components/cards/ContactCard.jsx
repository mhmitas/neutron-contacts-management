"use client"

import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Edit2, EllipsisVertical, Star, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation'
import UpdateModal from '../shared/UpdateModal'
import askConfirm from '../shared/confirmModals/askConfirm'
import { deleteContact } from '@/lib/actions/contact.actions'
import toast from 'react-hot-toast'


const ContactCard = ({ contact, userId }) => {
    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const router = useRouter()
    const { firstName, lastName, email, phone, address, avatar } = contact;

    function handleRedirect() {
        router.push(`/contacts/${contact?._id}/details`)
    }
    function handleRedirectFromParent(e) {
        if (e.target !== e.currentTarget) return;
        router.push(`/contacts/${contact?._id}/details`)
    }

    function handleUpdate() {
        setShowUpdateModal(true);
    }

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
                // router.push('/')
            }
        } catch (error) {
            // console.error(error)
            toast.error(error?.message || "Something went wrong")
        }
    }

    return (
        <div
            className='grid grid-cols-1 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-10 py-2 pl-3 pr-5 sm:pl-6 sm:pr-8 lg:pl-6 lg:pr-6 hover:bg-secondary/10 rounded gap-2 relative group transition-colors mb-2 cursor-pointer active:bg-secondary/25'
            onClick={handleRedirectFromParent}
        >
            {/* name and avatar | always display */}
            <div
                className='flex items-center gap-4 col-span-3'
                onClick={handleRedirect}
                title='Click to see details'
            >
                <Avatar>
                    <AvatarImage src={avatar} />
                    <AvatarFallback>{firstName?.slice(0, 1)}</AvatarFallback>
                </Avatar>
                <h3 className='line-clamp-2'>{firstName + " " + lastName}</h3>
            </div>
            {/* email | visible from sm device */}
            <div
                className='overflow-hidden col-span-2 hidden sm:flex items-center'
                onClick={handleRedirect}
                title='Click to see details'
            >
                <h3 className='line-clamp-1'>{email}</h3>
            </div>
            {/* phone | visible from sm device */}
            <div
                className='overflow-hidden col-span-2 hidden md:flex items-center justify-center'
                onClick={handleRedirect}
                title='Click to see details'
            >
                <h3 className='line-clamp-1 '>{phone}</h3>
            </div>
            {/* address | visible from xl device */}
            <div
                className='overflow-hidden col-span-2 hidden xl:flex items-center text-sm'
                onClick={handleRedirect}
                title='Click to see details'
            >
                <h3 className='line-clamp-1'>{address}</h3>
            </div>
            {/* action | display form lg device */}
            <div className='hidden lg:flex justify-center items-center'>
                {/* add to favorite */}
                <Button size="icon" variant="ghost" className="rounded-full" ><Star className='size-4' /></Button>
                {/* update */}
                <Button onClick={handleUpdate} size="icon" variant="ghost" className="rounded-full" ><Edit2 className='size-4' /></Button>
                {/* delete */}
                <Button onClick={handleDelete} size="icon" variant="ghost" className="rounded-full" ><Trash className='size-4' /></Button>
            </div>
            <EllipseMenu
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
            />
            <UpdateModal
                open={showUpdateModal}
                setOpen={setShowUpdateModal}
                contact={contact}
                userId={userId}
            />
        </div>
    )
}

export default ContactCard


function EllipseMenu({ handleUpdate, handleDelete }) {
    return (
        <DropdownMenu className=''>
            <DropdownMenuTrigger asChild className='absolute lg:hidden flex right-2 top-1/4'>
                <Button size="icon" variant="ghost" className="rounded-full group-hover:bg-background/50 size-7" ><EllipsisVertical className='size-4' /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="*:px-4 *:py-2 px-0 shadow-lg min-w-64">
                <DropdownMenuItem className="space-x-2">
                    <Star className='size-4' />
                    <span>Add to favorites</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleUpdate} className="space-x-2">
                    <Edit2 className='size-4' />
                    <span>Edit</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDelete} className="space-x-2">
                    <Trash className='size-4' />
                    <span>Delete</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )

}