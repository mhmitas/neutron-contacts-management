import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '../ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Edit, Edit2, EllipsisVertical, Star, Trash } from 'lucide-react';
import Link from 'next/link';


const ContactCard = ({ contact }) => {
    const { firstName, email, phone, address, avatar } = contact

    return (
        <Link href="#">
            <div className='grid grid-cols-1 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-10 py-2 pl-3 pr-5 sm:pl-6 sm:pr-8 lg:pl-6 lg:pr-6 hover:bg-muted rounded-lg gap-2 relative group transition-colors mb-2'>
                {/* name and avatar | always display */}
                <div className='flex items-center gap-4 col-span-3'>
                    <Avatar>
                        <AvatarImage src={avatar} />
                        <AvatarFallback>{firstName.slice(0, 1)}</AvatarFallback>
                    </Avatar>
                    <h3 className='line-clamp-2'>{firstName}</h3>
                </div>
                {/* email | display from sm device */}
                <div className='overflow-hidden col-span-2 hidden sm:flex items-center'>
                    <h3 className='line-clamp-1'>{email}</h3>
                </div>
                {/* phone | display from sm device */}
                <div className='overflow-hidden col-span-2 hidden md:flex items-center justify-center'>
                    <h3 className='line-clamp-1 '>{phone}</h3>
                </div>
                {/* address | display from xl device */}
                <div className='overflow-hidden col-span-2 hidden xl:flex items-center text-sm'>
                    <h3 className='line-clamp-1'>{address}</h3>
                </div>
                {/* action | display form lg device */}
                <div className='hidden lg:flex justify-center items-center'>
                    <Button size="icon" variant="ghost" className="rounded-full" ><Star className='size-4' /></Button>
                    <Button size="icon" variant="ghost" className="rounded-full" ><Edit2 className='size-4' /></Button>
                    <Button size="icon" variant="ghost" className="rounded-full" ><Trash className='size-4' /></Button>
                </div>
                <EllipseMenu />
            </div>
        </Link>
    )
}

export default ContactCard


function EllipseMenu() {
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
                <DropdownMenuItem className="space-x-2">
                    <Edit2 className='size-4' />
                    <span>Edit</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="space-x-2">
                    <Trash className='size-4' />
                    <span>Delete</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )

}