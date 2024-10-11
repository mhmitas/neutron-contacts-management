import Link from "next/link"
import { SmNavbarSheet } from "./NavbarSections"

export default async function Navbar() {

    return (
        <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md shadow-sm dark:border-b">
            <div className="flex items-center justify-between h-16 my-container">
                <div className="flex-shrink-0 flex items-center gap-4">
                    <div className="md:hidden flex">
                        <SmNavbarSheet />
                    </div>
                    <Link href="/" className="">
                        <div className="w-max flex items-center gap-2">
                            <img className="w-6 sm:w-8" src="/logo.png" alt="logo" width={10} height={10} />
                            <span className="text-xl md:text-2xl font-medium">Contacts</span>
                        </div>
                    </Link>
                </div>
                <div className="hidden md:block">

                </div>
                <div className="flex items-center gap-2">

                </div>
            </div>
        </nav >
    )
}