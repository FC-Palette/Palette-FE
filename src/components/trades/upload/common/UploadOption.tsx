import { theme } from 'styles/index'
import { styled } from 'styled-components'
import Select from '@mui/material/Select'

export interface OptionProps {
  $paddingLeft?: string
  type?: string
  ph?: string
  value?: string
  children?: React.ReactNode
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type OptionType = Pick<OptionProps, '$paddingLeft' | 'type' | 'onChange'>

export const UploadOption = ({
  children,
  ph,
  type,
  value,
  $paddingLeft
}: OptionProps) => {
  return (
    <Wrapper>
      <Select
        className="custom-select"
        style={{
          paddingLeft: $paddingLeft
        }}
        type={type}
        value={value}
        placeholder={ph}>
        {children}
      </Select>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .custom-select {
    width: 335px;
    border-radius: 8px;
    height: 48px;

    &:focus {
      outline: none;
      border: 1px solid ${theme.main.blue0};
    }
  }
`
