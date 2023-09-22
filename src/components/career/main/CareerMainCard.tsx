import styled from 'styled-components'
import {
  CareerMainItemCreateButton,
  CareerMainItemsWrap
} from 'components/career/index'

export const CareerMainCard = ({ responseData }) => {
  return (
    <Card>
      {/* {responseData && responseData.length > 0 ? (
        responseData.map(items =>
          items.map(item => (
            <CareerMainItemsWrap
              key={item.id}
              data={item}
            />
          ))
        )
      ) : (
        <p>데이터 없음</p>
      )} */}

      {responseData && responseData.length > 0 ? (
        responseData.map(item => (
          <CareerMainItemsWrap
            key={item.id}
            data={item}
          />
        ))
      ) : (
        <p>데이터 없음</p>
      )}

      <CareerMainItemCreateButton />
    </Card>
  )
}

const Card = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
`
