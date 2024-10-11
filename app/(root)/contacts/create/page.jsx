import ContactForm from '@/components/shared/ContactForm'
import React from 'react'

const CreateContactPage = () => {
    return (
        <main className='my-container mb-8'>
            <h1 className='text-xl sm:text-2xl text-center font-semibold my-6'>Add a new contact</h1>
            <ContactForm formType="Create" />
        </main>
    )
}

export default CreateContactPage