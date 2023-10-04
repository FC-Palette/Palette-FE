import { fetchDetailGlobalState } from '@/recoil'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

export const GetDetailCategoryChips = () => {
  const atom = useRecoilValue(fetchDetailGlobalState)
  const { jobs } = atom

  useEffect(() => {}, [jobs])
  const categoryMap = jobs.map((item: string, idx: any) => (
    <CategoryChip key={idx}>{item}</CategoryChip>
  ))

  const isNotCategory = () => {
    return <DummyCategoryChip>미리보기</DummyCategoryChip>
  }

  return (
    <CategoryChipsWrap>
      {categoryMap.length > 0 ? categoryMap : isNotCategory()}
    </CategoryChipsWrap>
  )
}

const CategoryChipsWrap = styled.div`
  margin: 3.5% 6.4%;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`

const CategoryChip = styled.div`
  min-height: 25px;
  color: ${props => props.theme.greyScale.grey7};
  background-color: ${props => props.theme.greyScale.grey2};
  font-size: 14px;
  line-height: 16.71px;
  padding: 1% 2%;
  border-radius: 4px;
`
const DummyCategoryChip = styled.div`
  height: 25px;
  color: ${props => props.theme.greyScale.grey7};
  background-color: ${props => props.theme.greyScale.grey2};
  font-size: 14px;
  line-height: 16.71px;
  padding: 4px 8px;
  border-radius: 4px;
`
