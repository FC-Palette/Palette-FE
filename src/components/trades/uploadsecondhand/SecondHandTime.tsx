import React, { useState } from 'react'
import { DesktopTimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import styled from 'styled-components'

export const SecondHandTime = () => {
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)

  return (
    <TimePickerContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <>
          <DesktopTimePicker
            label="시작 시간"
            value={startTime}
            onChange={newValue => setStartTime(newValue)}
          />
          ~
        </>
        <>
          <DesktopTimePicker
            label="종료 시간"
            value={endTime}
            onChange={newValue => setEndTime(newValue)}
          />
        </>
      </LocalizationProvider>
    </TimePickerContainer>
  )
}

const TimePickerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${props => props.theme.greyScale.grey9};
  height: 48px;
  margin: 8px 0px;
`
