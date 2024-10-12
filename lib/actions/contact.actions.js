"use server"

import mongoose from "mongoose"
import { Contact } from "../database/models/contact.model"
import { User } from "../database/models/user.model"
import { connectDB } from "../database/mongoose"
import { deleteImageFromCloudinary, uploadImageOnCloudinary } from "../cloudinary/uploadFileOnCloudinary"
import { revalidatePath } from "next/cache"


// CREATE CONTACT
export async function createContact({ contact, formData, userId }) {
    try {
        await connectDB()

        // verify the user
        const user = await User.exists({ _id: new mongoose.Types.ObjectId(`${userId}`) })
        if (!user) {
            return { error: "User not found" }
        }

        // handle the avatar upload;
        let avatar;
        if (formData.get("avatarFile") && formData.get("avatarFile") !== 'null') {
            avatar = await uploadImageOnCloudinary(formData.get("avatarFile"))
        }

        // save contact in database
        const newContact = await Contact.create({
            ...contact,
            avatar,
            user: userId
        });

        revalidatePath('/')

        // return the result
        return { data: JSON.parse(JSON.stringify(newContact)), success: true }

    } catch (error) {
        throw error
    }
}

// GET CONTACTS OF A USER
export async function getContactsByUser({ userId }) {
    try {
        await connectDB()

        const contacts = await Contact.find(
            { user: userId }
        )
            .sort({ firstName: 'asc' })

        return { data: JSON.parse(JSON.stringify(contacts)), success: true }
    } catch (error) {
        throw error
    }
}

// GET CONTACT BY ID
export async function getContactById({ contactId }) {
    try {
        await connectDB()

        if (!mongoose.isValidObjectId(contactId)) {
            return { error: 'Invalid Contact ID' }
        }

        const contact = await Contact.findById(contactId)

        return { data: JSON.parse(JSON.stringify(contact)), success: true }
    } catch (error) {
        throw error
    }
}

// UPDATE CONTACT
export async function updateContact({ contactId, contact, formData, userId }) {
    try {
        await connectDB();

        const dbContact = await Contact.findById(contactId).select("firstName lastName, email, phone, address user avatar");

        if (!dbContact) {
            return { error: "Contact not found" };
        }

        // verify the user
        if (userId !== dbContact.user?.toString()) {
            return { error: "Unauthenticated user" };
        }

        // handle the avatar change;
        // if avatar has changed, upload it and set updated avatar url to the avatar property;
        // else keep the old avatar url
        if (formData && formData.get("avatarFile")) {
            let avatarUrl = await uploadImageOnCloudinary(formData.get("avatarFile"));
            // remove this code if create any issues
            if (dbContact?.avatar) {
                deleteImageFromCloudinary(dbContact?.avatar)
            }
            // set new avatar url;
            dbContact.avatar = avatarUrl;
        }

        // assign all updated values
        dbContact.firstName = contact?.firstName;
        dbContact.lastName = contact?.lastName;
        dbContact.email = contact?.email;
        dbContact.phone = contact?.phone;
        dbContact.address = contact?.address;

        // save updated contact
        const updatedContact = await dbContact.save();

        revalidatePath(`contacts/${contactId}/details`)

        return { data: JSON.parse(JSON.stringify(updatedContact)), success: true }
    } catch (error) {
        throw error
    }
}

// DELETE CONTACT BY ID
export async function deleteContact({ contactId }) {
    try {
        await connectDB()

        // delete the contact
        const contact = await Contact.findByIdAndDelete(contactId);

        // delete the avatar;
        if (contact?.avatar) {
            deleteImageFromCloudinary(contact?.avatar)
        }

        revalidatePath("/");

        return { data: JSON.parse(JSON.stringify(contact)), success: true }
    } catch (error) {
        throw error
    }
}