import {
    forwardRef,
    ForwardRefRenderFunction,
    useCallback,
    useImperativeHandle,
    useState
  } from 'react'
  import { Box, Modal, ModalProps } from '@mui/material'
  
 
  
  export type BasicModalHandle = {
    show: () => void
    hide: () => void
  }
  
  export type TModalProps = Omit<ModalProps, 'open' | 'onClose'>
  
  export interface BasicModalProps extends TModalProps {
    children: any
    padding?: string | number
    maxWidth?: string | number
    borderRadius?: string | number
    bgColor?: string
    onClose?: () => void
    disableClickBackdrop?: boolean
  }
  
  const BasicModal: ForwardRefRenderFunction<
    BasicModalHandle,
    BasicModalProps
  > = (
    {
      sx,
      children,
      bgColor = 'white',
      padding = '1.5rem',
      maxWidth = '820px',
      borderRadius = '10px',
      onClose,
      disableClickBackdrop,
      ...rest
    },
    ref
  ) => {
    const [open, setOpen] = useState<boolean>(false)
  
    const onShow = useCallback(() => setOpen(true), [])
    const onHide = useCallback(
      (event: {}, reason: 'backdropClick' | 'escapeKeyDown' | 'trigger') => {
        if (disableClickBackdrop && reason === 'backdropClick') return
        onClose?.()
        setOpen(false)
      },
      [onClose, disableClickBackdrop]
    )
  
    const hide = useCallback(() => onHide({}, 'trigger'), [onHide])
  
    useImperativeHandle(ref, () => ({ show: onShow, hide }), [onShow, hide])
  
    return (
      <Modal open={open} onClose={onHide} {...rest}>
        <Box
          width={'100%'}
          padding={padding}
          maxWidth={maxWidth}
          bgcolor={bgColor}
          borderRadius={borderRadius}
          sx={{
            top: '50%',
            left: '50%',
            position: 'absolute',
            boxSizing: 'border-box',
            transform: 'translate(-50%, -50%)',
            ':focus-visible': {
              outline: 'none'
            },
            ...sx
          }}
        >
          {children}
        </Box>
      </Modal>
    )
  }
  
  export default forwardRef(BasicModal)
  