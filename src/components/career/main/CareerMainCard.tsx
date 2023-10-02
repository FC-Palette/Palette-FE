import styled from 'styled-components'
import { CareerMainItemsWrap } from 'components/career/index'

export const CareerMainCard = ({ responseData }) => {
  return (
    <Card>
      {responseData && responseData.length > 0 ? (
        responseData.map(item => (
          <CareerMainItemsWrap
            key={item.id}
            data={item}
          />
        ))
      ) : (
        <IsNotData>작성된 글이 없습니다.</IsNotData>
      )}
    </Card>
  )
}

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

const IsNotData = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 58px;
  margin-left: 24px;
  color: ${props => props.theme.main.black};
`
