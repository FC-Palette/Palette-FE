import styled from 'styled-components'

export const GetDetailCategoryChips = () => {
  const dummyCategory = [
    '카테고리1',
    '카테고리2',
    '카테고리3',
    '카테고리4',
    '카테고리5',
    '카테고리6',
    '카테고리7',
    '카테고리8',
    '카테고리9'
  ]

  const categoryMap = dummyCategory.map((item, idx) => (
    <CategoryChip key={idx}>{item}</CategoryChip>
  ))

  const isNotCategory = () => {
    return <DummyCategoryChip>미리보기</DummyCategoryChip>
  }

  return (
    <>
      <Container>
        <CategoryChipsWrap>
          {categoryMap.length > 0 ? categoryMap : isNotCategory()}
        </CategoryChipsWrap>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 430px;
`

const CategoryChipsWrap = styled.div`
  margin: 12px 24px 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`

const CategoryChip = styled.div`
  width: auto;
  height: 25px;
  color: ${props => props.theme.greyScale.grey7};
  background-color: ${props => props.theme.greyScale.grey2};
  font-size: 14px;
  line-height: 16.71px;
  padding: 4px 8px;
  border-radius: 4px;
`
const DummyCategoryChip = styled.div`
  width: auto;
  height: 25px;
  color: ${props => props.theme.greyScale.grey7};
  background-color: ${props => props.theme.greyScale.grey2};
  font-size: 14px;
  line-height: 16.71px;
  padding: 4px 8px;
  border-radius: 4px;
`
