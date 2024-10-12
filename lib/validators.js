import { z } from "zod";

export const contactFormSchema = z.object({
    firstName: z
        .string()
        .min(3, { message: 'First Name is required and must be at least 3 characters' })
        .max(30, { message: 'First Name must be less than 31 characters' }),
    lastName: z
        .string()
        .max(20, { message: 'Last Name must be less than 21 characters' })
        .optional()
        .or(z.literal("")),
    email: z
        .string()
        .email()
        .optional()
        .or(z.literal("")),
    phone: z
        .string()
        .min(5, { message: "Invalid Phone Number" })
        .max(20, { message: "Invalid Phone Number" }),
    address: z
        .string()
        .min(3, { message: 'Address must be at least 3 characters' })
        .max(100, { message: 'Address must be less than 101 characters' })
})

/* 
.optional()
.or(z.literal("")),
*/