"use client"

import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet";
import { LogOut, Menu, Plus } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../ui/button';
import { FaStar, FaUsers } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import Image from 'next/image';

const navItems = [
    { name: "Contacts", href: "/", Icon: FaUsers },
    { name: "Favorites ", href: "/favorites", Icon: FaStar },
]


export const SmNavbarSheet = () => {
    const pathname = usePathname()

    return (
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>
                        <Link href="/" className="">
                            <div className="w-max flex items-center gap-2 mb-3">
                                <img className="w-6 sm:w-8" src="/logo.png" alt="logo" width={10} height={10} />
                                <span className="text-xl md:text-2xl font-medium">Contacts</span>
                            </div>
                        </Link>
                    </SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <ul className='w-full flex flex-col gap-2'>
                    <li className='text-start mb-2'>
                        <Button className="space-x-2 rounded-full px-6">
                            <span>Create Contact</span>
                            <Plus />
                        </Button>
                    </li>
                    {navItems.map(item => (
                        <Link key={item.href} href={item.href}>
                            <li className={
                                cn(
                                    'w-full hover:bg-muted text-left px-4 py-2 rounded-md flex items-center gap-4',
                                    pathname === item.href ?
                                        'bg-muted'
                                        : 'bg-background'
                                )}>
                                <item.Icon className='text-xl' />
                                <span>{item.name}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </SheetContent>
        </Sheet>

    )
}


export const MdNavItems = () => {
    const pathname = usePathname()

    return (
        <>
            {navItems.map(item => (
                <Link
                    className={cn('font-semibold hover:text-cyan-500', pathname === item.href ? 'text-cyan-500' : 'text-foreground')}
                    key={item.href}
                    href={item.href}
                >
                    {item.name}
                </Link>
            ))}
        </>
    )
}


export const NavAvatar = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='rounded-full'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="end" className="rounded-xl">
                <div className='p-4 min-w-64 w-max'>
                    <figure className='flex items-center justify-center size-20 m-auto mb-2'>
                        <Image width={80} height={80} className='w-full rounded-full border-cyan-500 border' src="https://github.com/shadcn.png" alt="" />
                    </figure>
                    <div className=''>
                        <h3 className='text-lg font-medium text-center'>MH. Mitas</h3>
                        <p className='text-sm text-center'>mahfuzulmitas@gmail.com</p>
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="py-2 px-4 space-x-2">
                    <LogOut className='size-5' />
                    <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}