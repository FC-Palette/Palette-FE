import styled from 'styled-components'
import {
  EditRoleAndGenderSelector,
  EditTypeSelector1,
  EditTypeSelector2
} from '.'
import { useRecoilValue } from 'recoil'
import { careerEditGlobalState } from '@/recoil'
import { StepProgressBar } from '@/components'

export const EditOneCard = () => {
  const globalData = useRecoilValue(careerEditGlobalState)
  console.log(globalData)
  return (
    <Wrap>
      <StepProgressBar $currentPage={1}/>
      <EditTypeSelector1 />
      <EditTypeSelector2 />
      <EditRoleAndGenderSelector />
    </Wrap>
  )
}

const Wrap = styled.div``
