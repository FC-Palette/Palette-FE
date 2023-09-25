// import React, { useState } from 'react'
import { styled } from 'styled-components'
import Select from '@mui/material/Select'
// import { theme } from 'styles/index'
import MenuItem from '@mui/material/MenuItem'
import { ArrowRight2 } from 'iconsax-react'
import { iconMapping1 } from 'components/common/index'
import { secondhandcreateglobalstate } from 'recoil/index'
import { useRecoilState } from 'recoil'

export const SecondHandOption = () => {
  const [secondHandGlobalState, setSecondHandGlobalState] = useRecoilState(
    secondhandcreateglobalstate
  )
  const { category } = secondHandGlobalState

  const handleChange = event => {
    const selectedCategoryValue = event.target.value

    setSecondHandGlobalState(prev => ({
      ...prev,
      category: selectedCategoryValue
    }))
  }

  return (
    <Wrapper>
      <CustomSelect
        value={category}
        onChange={handleChange}
        IconComponent={ArrowRight2}>
        {Object.keys(iconMapping1).map(key => (
          <MenuItem
            key={key}
            value={key}>
            {category === key ? (
              <>{iconMapping1[key].label}</>
            ) : (
              <>
                <IconWrapper>{iconMapping1[key].icon}</IconWrapper>
                {iconMapping1[key].label}
              </>
            )}
          </MenuItem>
        ))}
      </CustomSelect>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const CustomSelect = styled(Select)`
  && {
    width: 335px;
    border-radius: 8px;
    height: 48px;

    &:focus {
    }
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`
