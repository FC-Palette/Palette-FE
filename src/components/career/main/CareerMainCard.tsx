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
        <div>데이터 없음</div>
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
