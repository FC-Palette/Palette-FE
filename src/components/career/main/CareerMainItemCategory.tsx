import { styled } from 'styled-components'
import { profileNCareerFilter } from 'constants/index'

export const CareerMainItemCategory = () => {
  return (
    <CategoryWrap>
      <CategoryItem>{profileNCareerFilter.jobType[0]}</CategoryItem>
      <CategoryItem>{profileNCareerFilter.male[0]}</CategoryItem>
      <CategoryItem>{profileNCareerFilter.typeOne[0]}</CategoryItem>
    </CategoryWrap>
  )
}

const CategoryWrap = styled.div`
  display: flex;
  width: auto;
  gap: 4px;
  
`

const CategoryItem = styled.div`
  width: auto;
  height: 25px;
  color: ${props => props.theme.greyScale.grey7};
  background-color: ${props => props.theme.greyScale.grey2};
  font-size: 14px;
  line-height: 16.71px;
  padding: 4px 8px;
  border-radius: 4px;
`
