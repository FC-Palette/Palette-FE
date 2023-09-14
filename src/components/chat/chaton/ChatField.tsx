import { styled } from 'styled-components'
import { Wrapper, Modal } from 'components/index'
import { useRecoilState } from 'recoil'
import { modalOnState } from 'recoil/index'

export const ChatField = () => {
  const [modalOn, setModalOn] = useRecoilState(modalOnState)
  const handleModalOn = () => {
    setModalOn(!modalOn)
    console.log(modalOn)
  }
  return <Wrapper></Wrapper>
}
