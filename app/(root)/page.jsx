import { auth } from '@/auth';
import ContactsSection from '@/components/common/ContactsSection'
import ErrorCard from '@/components/common/ErrorCard';
import { getContactsByUser } from '@/lib/actions/contact.actions';
import React from 'react'

const Home = async () => {

    const session = await auth()

    const { data: contacts, error } = await getContactsByUser({ userId: session?.user?.id });


    if (error) {
        return <ErrorCard error={error} />
    }

    return (
        <main className='mb-10'>
            <section className='my-container'>
                <h1 className='text-xl sm:text-2xl font-medium mb-3 mt-6'>Contacts {'('}{contacts?.length}{')'}</h1>
                <ContactsSection contacts={contacts} session={session} />
            </section>
        </main>
    )
}

export default Home