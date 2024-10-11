import React from 'react'
import ContactCard from '../cards/ContactCard';

const ContactsSection = () => {
    return (
        <section className='my-container mt-6'>
            <h1 className='text-2xl font-medium'>Contacts {'('}{contacts.length}{')'}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-10 py-3 px-6 gap-4 border-b mb-4 sticky top-16 bg-background/70 z-10 backdrop-blur-sm'>
                <p className='col-span-3'>Name</p>
                <p className='col-span-2 hidden sm:flex items-center'>Email</p>
                <p className='col-span-2 hidden md:flex items-center justify-center'>Phone</p>
                <p className='col-span-2 hidden xl:flex items-center'>Address</p>
                <p className='hidden lg:flex justify-center items-center'>Actions</p>
            </div>
            <div className=''>
                {contacts.map((contact, index) => <ContactCard key={index} contact={contact} />)}
            </div>
        </section>
    )
}

export default ContactsSection

const contacts = [
    {
        firstName: "John Doe",
        email: "johndoe@gmail.com",
        phone: "+1234567890",
        address: "123 Main St, New York, NY 10001",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        firstName: "Jane Smith",
        email: "janesmith@gmail.com",
        phone: "+1987654321",
        address: "456 Elm St, Los Angeles, CA 90001",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        firstName: "Michael Johnson",
        phone: "+1122334455",
        address: "789 Pine St, Miami, FL 33101",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        firstName: "Emily Brown",
        email: "emilybrown@yahoo.com",
        phone: "+1445566778",
        address: "321 Oak St, Houston, TX 77001",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        firstName: "Robert Davis Robert Davis",
        email: "robertdavis@hotmail.com",
        phone: "+1556677889",
        address: "654 Maple St, Chicago, IL 60601",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        firstName: "Jessica Lee Lee Jessica Lee",
        phone: "+1778899001",
        address: "987 Cedar St, Phoenix, AZ 85001",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        firstName: "William Harris William Harris",
        email: "williamharris@gmail.com",
        phone: "+1223344556",
        address: "567 Birch St, Denver, CO 80201",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
        firstName: "Olivia Martinez",
        email: "oliviamartinez@yahoo.com",
        phone: "+1445566889",
        address: "432 Poplar St, Seattle, WA 98101",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        firstName: "David Wilson",
        phone: "+1667788990",
        address: "210 Spruce St, Boston, MA 02101",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        firstName: "Sophia Taylor",
        email: "sophiataylorDavid@gmail.com",
        phone: "+1778899123",
        address: "765 Fir St, Atlanta, GA 30301",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
        firstName: "James White",
        email: "jameswhite@hotmail.com",
        phone: "+1334455667",
        address: "101 Aspen St, San Francisco, CA 94101",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
        firstName: "Ava Clark",
        phone: "+1990011223",
        address: "202 Willow St, San Diego, CA 92101",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
        firstName: "Benjamin Lewis",
        email: "benjaminlewis@gmail.com",
        phone: "+1887788990",
        address: "876 Redwood St, Las Vegas, NV 89101",
        avatar: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
        firstName: "Mia Walker",
        email: "miawalker@yahoo.com",
        phone: "+1556677880",
        address: "123 Alder St, Austin, TX 73301",
        avatar: "https://randomuser.me/api/portraits/women/7.jpg"
    },
    {
        firstName: "Liam Hall",
        phone: "+1445566777",
        address: "456 Cypress St, Portland, OR 97201",
        avatar: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
        firstName: "Isabella Green",
        email: "isabellagreen@hotmail.com",
        phone: "+1223344555",
        address: "789 Oak St, Sacramento, CA 95801",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
        firstName: "Daniel Hernandez",
        phone: "+1990011222",
        address: "321 Maple St, Kansas City, MO 64101",
        avatar: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
        firstName: "Emma King",
        email: "emmaking@gmail.com",
        phone: "+1334455666",
        address: "987 Fir St, Minneapolis, MN 55401",
        avatar: "https://randomuser.me/api/portraits/women/9.jpg"
    },
    {
        firstName: "Lucas Scott",
        email: "lucasscott@gmail.com",
        phone: "+1887788999",
        address: "654 Pine St, Charlotte, NC 28201",
        avatar: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
        firstName: "Amelia Adams",
        phone: "+1223344567",
        address: "123 Cedar St, Detroit, MI 48201",
        avatar: "https://randomuser.me/api/portraits/women/10.jpg"
    }
];
