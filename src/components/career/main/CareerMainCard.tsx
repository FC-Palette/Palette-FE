import styled from 'styled-components'
import { CareerMainItemsWrap } from 'components/career/index'
import { useMemo } from 'react'

export const CareerMainCard = ({ responseData }) => {
  const cardContent = useMemo(() => {
    if (!Array.isArray(responseData) || responseData.length === 0) {
      return null
    }

    return responseData.map(item => (
      <CareerMainItemsWrap
        key={item.id}
        data={item}
      />
    ))
  }, [responseData])

  return <Card>{cardContent}</Card>
}

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`
