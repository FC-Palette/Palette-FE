import { Button } from 'components/index'
import { styled } from 'styled-components'

//두개로 나뉜 모달 버튼들입니다.
export const ModalButtons = () => {
  return (
    <Buttons>
      <Button></Button>
      <Button></Button>
    </Buttons>
  )
}

const Buttons = styled.div`
  display: flex;
`
