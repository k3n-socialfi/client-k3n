import * as z from 'zod';

export const RequestSchema = () =>  z.object({
    typeOfRequest: z.string().min(1),
    fullName: z.string().optional(),
    otherRequest: z.string().optional(),
    tip:z.string().optional()
  });
