import styled from 'styled-components'

export const PreviewCategory = ({ category }) => {
  return (
    <>
      <Container>
        <CategoryChipsWrap>
          <CategoryChip>{category}</CategoryChip>
        </CategoryChipsWrap>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
`

const CategoryChipsWrap = styled.div`
  margin: 7% 5.7% 0;
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
