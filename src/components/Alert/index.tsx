"use client"
import React from 'react'
import { useAlert } from '@/contexts/AlertContext'
import { Snackbar, Alert } from '@mui/material'

interface IAlert {
  autoHide?: number
  vertical?: 'top' | 'bottom'
  horizontal?: 'center' | 'left' | 'right'
}

export default function CustomAlert({
  autoHide = 2000,
  vertical = 'top',
  horizontal = 'right',
}: IAlert) {
  const { open, message, type, setAlert } = useAlert()
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      setAlert(false)
    }
  }
  return (
    <>
      {message && (
        <Snackbar
          open={open}
          autoHideDuration={autoHide}
          onClose={handleClose}
          anchorOrigin={{
            vertical: vertical,
            horizontal: horizontal,
          }}
        >
          <Alert severity={type}>{message}</Alert>
        </Snackbar>
      )}
    </>
  )
}