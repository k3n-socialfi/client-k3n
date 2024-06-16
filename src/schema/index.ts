import * as z from 'zod'
import { RequestSchema } from './schemaRequest'





  export type RequestTypeSchema = z.infer<
  ReturnType<typeof RequestSchema>
>

