import { styled } from 'styled-components'
import { profileNCareerFilter } from 'constants/index'

export const CareerMainItemCategory = () => {
  return (
    <CategoryWrap>
      <CategoryItem>{profileNCareerFilter.job[0]}</CategoryItem>
      <CategoryItem>{profileNCareerFilter.male[0]}</CategoryItem>
      <CategoryItem>{profileNCareerFilter.job[0]}</CategoryItem>
    </CategoryWrap>
  )
}

const CategoryWrap = styled.div`
  display: flex;
  gap: 4px;
`

const CategoryItem = styled.div`
  color: ${props => props.theme.greyScale.grey7};
  background-color: ${props => props.theme.greyScale.grey2};
  padding: 4px 8px;
  border-radius: 4px;
`
