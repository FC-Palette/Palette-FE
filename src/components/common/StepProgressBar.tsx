import styled from 'styled-components'
import { ProgressBarProps } from '@/types'

// 파란거
const ProgressBar = styled.div<ProgressBarProps>`
  height: 4px;
  background-color: ${props => props.theme.main.blue0};
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  width: ${props =>
    props.$currentPage === 1
      ? '33%'
      : props.$currentPage === 2
      ? '66%'
      : '100%'};
`

export const StepProgressBar = ({ $currentPage }: ProgressBarProps) => {
  return (
    <Wrap>
      <DefaultBar>
        <ProgressBar $currentPage={$currentPage} />
      </DefaultBar>
      <ProgressP $currentPage={$currentPage}>STEP {$currentPage}</ProgressP>
    </Wrap>
  )
}

// 래퍼
const Wrap = styled.div`
  position: sticky;
  top: 80px;
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.main.white};
  gap: 5px;
  z-index: 1;
`

// 그레이
const DefaultBar = styled.div`
  height: 4px;
  background-color: ${props => props.theme.greyScale.grey1};
  width: 100%;
`
// 스탭
const ProgressP = styled.p<ProgressBarProps>`
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  position: relative;
  left: ${props =>
    props.$currentPage === 1
      ? '20%'
      : props.$currentPage === 2
      ? '50%'
      : '83%'};
`
