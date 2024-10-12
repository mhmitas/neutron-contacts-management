"use client"

import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import ContactForm from './ContactForm'

const UpdateModal = ({ open, setOpen, userId, contact }) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-2xl w-[95%] h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8" onPointerDownOutside={e => e.preventDefault()}>
                <DialogHeader className="">
                    <DialogTitle>Update Contact</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                {/* contact form */}
                <ContactForm
                    formType={"Update"}
                    contact={contact}
                    userId={userId}
                    setShowModal={setOpen}
                />
            </DialogContent>
        </Dialog>

    )
}

export default UpdateModal