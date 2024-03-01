import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Box from '@mui/material/Box'
// import { ClearIcon } from '@mui/icons-material/Clear';

interface ISelectProps {
  width: string
  id: string
  label: string
  options: string[]
  onChange: (value: string) => void
}

const SelectBox: React.FC<ISelectProps> = (props) => {
  const [selectedValue, setSelectedValue] = useState('')
  const handleChange: any = (event: SelectChangeEvent) => {
    const value = event.target.value as string
    setSelectedValue(value)
    props.onChange(value)
  }

  const handleClear = () => {
    setSelectedValue('')
    props.onChange('')
  }

  return (
    <Box sx={{ width: `${props.width}` }}>
      <FormControl variant="outlined" fullWidth size="small">
        <InputLabel id={`${props.id}-label`}>{props.label}</InputLabel>
        <Select
          labelId={`${props.id}-label`}
          id={props.id}
          label={props.label}
          value={selectedValue}
          onChange={handleChange}
          sx={{ textAlign: 'left' }}
          // endAdornment={
          //   selectedValue && (
          //     <ClearIcon
          //       onClick={handleClear}
          //       sx={{
          //         cursor: 'pointer',
          //         color: '#757575',
          //         position: 'absolute',
          //         right: '13%',
          //       }}
          //     />
          //   )
          // }
        >
          {props.options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectBox
