import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet";
import { icons, Menu, Plus } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { FaStar, FaUsers } from "react-icons/fa";

const navItems = [
    { name: "Contacts", href: "/", Icon: FaUsers },
    { name: "Favorites ", href: "/favorites", Icon: FaStar },
]


export const SmNavbarSheet = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>
                        <Link href="/" className="">
                            <div className="w-max flex items-center gap-2 mb-2">
                                <img className="w-6 sm:w-8" src="/logo.png" alt="logo" width={10} height={10} />
                                <span className="text-xl md:text-2xl font-medium">Contacts</span>
                            </div>
                        </Link>
                    </SheetTitle>
                    <SheetDescription></SheetDescription>
                    <ul className='w-full flex flex-col gap-2'>
                        <li className='text-start'>
                            <Button className="space-x-2 rounded-full px-6">
                                <span>Create Contact</span>
                                <Plus />
                            </Button>
                        </li>
                        {navItems.map(item => (
                            <Link key={item.href} href={item.href}>
                                <li className='w-full hover:bg-muted text-left px-4 py-2 rounded-md flex items-center gap-4'>
                                    <item.Icon className='text-xl' />
                                    <span>{item.name}</span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}