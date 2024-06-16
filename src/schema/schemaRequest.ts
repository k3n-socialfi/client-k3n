import * as z from 'zod';

export const RequestSchema = () =>  z.object({
    typeOfRequest: z.string().min(1, { message: 'Required' }),
    fullName: z.string().min(1, { message: 'Required' }),
    otherRequest: z.string().optional(),
    tip:z.string().optional()
  });
