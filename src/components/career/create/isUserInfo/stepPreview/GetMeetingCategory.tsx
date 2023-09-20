import styled from 'styled-components'

export const GetMeetingCategory = ({ selectedMeetingTypes }) => {
  const categoryMap = selectedMeetingTypes?.map((item, idx) => (
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
  width: auto;
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
  white-space: nowrap;
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
