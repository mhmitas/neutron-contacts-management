"use server"

import mongoose from "mongoose"
import { Contact } from "../database/models/contact.model"
import { User } from "../database/models/user.model"
import { connectDB } from "../database/mongoose"
import { uploadImageOnCloudinary } from "../cloudinary/uploadFileOnCloudinary"
import { revalidatePath } from "next/cache"


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

export async function getContactsByUser({ userId }) {
    try {
        await connectDB()

        const contacts = await Contact.find(
            { user: new mongoose.Types.ObjectId(`${userId}`) }
        )
            .sort({ firstName: 'asc' })

        return { data: JSON.parse(JSON.stringify(contacts)), success: true }
    } catch (error) {
        throw error
    }
}

// export async function updateContact({ contactId, contact, formData, userId }) {