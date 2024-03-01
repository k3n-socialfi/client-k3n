import React from 'react'
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

export default function PaginationTable(props: any) {
    return (
        <Stack spacing={2}>
            <Pagination {...props}/>
        </Stack>
    )
}