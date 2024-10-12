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
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        phone: {
            type: String,
            trim: true
        },
        address: {
            type: String,
            trim: true
        },
        avatar: {
            type: String,
        },
        favorite: {
            type: Boolean,
            default: false
        },
        favoriteAt: {
            type: Date,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    { timestamps: true }
)


export const Contact = models.Contact || model('Contact', ContactSchema)