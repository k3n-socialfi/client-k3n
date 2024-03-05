"use client"
import React, { createContext, useState, useContext } from 'react'

interface IChildren {
    children: React.ReactNode
}

interface IAlertContextType {
    open: boolean
    message: string
    type: 'success' | 'error' | 'warning' | 'info'
    setAlert: (
        open: boolean,
        message?: string,
        type?: 'success' | 'error' | 'warning' | 'info'
    ) => void
    setAlertSuccess: (message: string) => void
    setAlertError: (message: string) => void
    setAlertClose: () => void
}

const AlertContext = createContext<IAlertContextType>({
    open: false,
    message: '',
    type: 'info',
    setAlert: () => undefined,
    setAlertSuccess: () => undefined,
    setAlertError: () => undefined,
    setAlertClose: () => undefined,
})

const AlertProvider = ({ children }: IChildren) => {
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState<'success' | 'error' | 'warning' | 'info'>(
        'info'
    )

    const setAlert = (
        alertOpen: boolean,
        alertMessage?: string,
        alertType?: 'success' | 'error' | 'warning' | 'info'
    ) => {
        setOpen(alertOpen)
        setMessage(alertMessage || '')
        setType(alertType || 'info')
    }
    const setAlertSuccess = (message: string) => {
        setAlert(true, message, 'success')
        setTimeout(() => {
            setAlert(false, '')
        }, 3000)
    }
    const setAlertError = (message: string) => {
        setAlert(true, message, 'error')
        setTimeout(() => {
            setAlert(false, '')
        }, 3000)
    }
    const setAlertClose = () => {
        setAlert(false, '')
    }
    return (
        <AlertContext.Provider
            value={{
                open,
                message,
                type,
                setAlert,
                setAlertClose,
                setAlertError,
                setAlertSuccess,
            }}
        >
            {children}
        </AlertContext.Provider>
    )
}
const useAlert = () => {
    return useContext(AlertContext)
}

export { AlertProvider, useAlert }