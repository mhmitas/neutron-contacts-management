import { z } from "zod";

export const contactFormSchema = z.object({
    firstName: z
        .string()
        .min(3, { message: 'First Name must be at least 3 characters' })
        .max(30, { message: 'First Name must be less than 31 characters' }),
    lastName: z
        .string()
        .min(3, { message: 'Last Name must be at least 3 characters' })
        .max(30, { message: 'Last Name must be less than 31 characters' }),
    email: z.string().email(),
    phone: z.string(),
    address: z
        .string()
        .min(2, { message: 'Address must be at least 3 characters' })
        .max(100, { message: 'Address must be less than 101 characters' }),
})
