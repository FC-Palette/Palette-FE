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

      <CareerMainItemCreateButton />
    </Card>
  )
}

const Card = styled.div`
  position: relative;
  width: 100%;
<<<<<<< HEAD
=======
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
>>>>>>> fbf0980 (feat: 성장해요 메인 페이지 컴포넌트 생성)
`
