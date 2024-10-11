import { model, models, Schema } from "mongoose";

const ContactSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        },
        address: {
            type: String,
            required: true,
            trim: true
        },
        avatar: {
            type: String,
        },
        favorite: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
)


export const Contact = models.Contact || model('Contact', ContactSchema)