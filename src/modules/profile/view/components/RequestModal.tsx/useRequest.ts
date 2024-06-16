
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import {  RequestTypeSchema } from '@/schema';
import { RequestSchema } from '@/schema/schemaRequest';







const useRequest = () => {


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty }
      } = useForm<RequestTypeSchema>({
      
        resolver: zodResolver(RequestSchema()),
      
        
      })

      const submitRequestCollaboration: SubmitHandler<RequestTypeSchema> =  useCallback(
        async (data) => {



         },[])

    return {
        register,
        handleSubmit,
        onSubmitRequest: submitRequestCollaboration

    }
}

export default useRequest;