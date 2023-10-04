import styled from 'styled-components'
import {
  EditRoleAndGenderSelector,
  EditTypeSelector1,
  EditTypeSelector2
} from '.'

import { StepProgressBar } from '@/components'

export const EditOneCard = () => {
  return (
    <Wrap>
      <StepProgressBar $currentPage={1} />
      <EditTypeSelector1 />
      <EditTypeSelector2 />
      <EditRoleAndGenderSelector />
    </Wrap>
  )
}

const Wrap = styled.div``
