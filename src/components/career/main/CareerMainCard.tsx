import styled from 'styled-components'
import {
  CareerMainItemCreateButton,
  CareerMainItemsWrap
} from 'components/career/index'

export const CareerMainCard = () => {
  return (
    <Card>
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />
      <CareerMainItemsWrap />

      <CareerMainItemCreateButton />
    </Card>
  )
}

const Card = styled.div`
  position: relative;
  width: 100%;
  top: 200px;

  /* height: auto; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */

  /* width: auto; */
  /* height: 100vh; */
`
