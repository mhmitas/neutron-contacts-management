"use client"

import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { contactFormSchema } from '@/lib/validators'
import { contactFormDefaultValue } from '@/lib/constants'
import { Plus, User } from 'lucide-react'
import Image from 'next/image'

const ContactForm = ({ formType, userId }) => {
    const [avatarFile, setAvatarFile] = useState(null)
    const [avatarPreview, setAvatarPreview] = useState('')

    function handleAvatarChange(e) {
        if (!e.target.files?.[0]) return
        setAvatarFile(e.target.files[0])
        setAvatarPreview(URL.createObjectURL(e.target.files[0]))
    }

    const form = useForm({
        resolver: zodResolver(contactFormSchema),
        defaultValues: contactFormDefaultValue,
    })

    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.table(values)
    }

    return (
        <section className='w-full max-w-xl mx-auto shadow-md dark:shadow-muted/50 rounded-lg p-4 sm:p-6 md:p-8'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {/* avatar input */}
                    <label
                        htmlFor='avatar'
                        className='m-auto relative border bg-gradient-to-b from-cyan-500/20 to-violet-500/20 to w-max rounded-full flex size-28 sm:size-36 aspect-square cursor-pointer'
                    >
                        <figure className='size-full overflow-hidden rounded-full flex items-center'>
                            {avatarPreview ? <Image className='w-full' width={150} height={150} src={avatarPreview} alt="avatar-preview" /> :
                                <User strokeWidth={1} className='p-6 size-full' />
                            }
                        </figure>
                        <input onChange={handleAvatarChange} type="file" name="avatar" id="avatar" className='hidden' />
                        <span className="absolute bottom-0 right-0 z-10 rounded-full border-background border-4 bg-primary text-primary-foreground p-1 hover:bg-opacity-90"><Plus /></span>
                    </label>
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} type="email" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input {...field} type="tel" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input {...field} type="text" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='text-center pt-2'>
                        <Button type="submit">Save</Button>
                    </div>
                </form>
            </Form>
        </section>
    )
}

export default ContactForm