import { auth } from '@/auth'
import ContactForm from '@/components/shared/ContactForm'
import React from 'react'

const CreateContactPage = async () => {
    const session = await auth()

    return (
        <main className='my-container mb-10'>
            <h1 className='text-xl sm:text-2xl text-center font-semibold my-6'>Add a new contact</h1>
            <ContactForm formType="Create" userId={session?.user?.id} />
        </main>
    )
}

export default CreateContactPage