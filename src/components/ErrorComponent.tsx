import { styled } from 'styled-components'
import { ERROR_TEXTS } from 'constants/index'

export const ErrorComponent = () => {
  return (
    <Wrapper>
      <ErrorHeader>{ERROR_TEXTS.headerText}</ErrorHeader>
      <ErrorMessage>{ERROR_TEXTS.apologyText}</ErrorMessage>
      <ErrorMessage>{ERROR_TEXTS.errorText}</ErrorMessage>
      <BackToMain>{ERROR_TEXTS.returnText}</BackToMain>
    </Wrapper>
  )
}

const BackToMain = styled.a`
  margin-top: 50px;
  text-decoration: none;
  padding: 15px;
  border: 1px solid #000;
  background-color: #fff;
  &:visited {
    color: #000;
  }
  &:hover {
    transition: 0.2s ease;
    color: #fff;
    background-color: #000;
    border-color: #000;
  }
`

const ErrorMessage = styled.p`
  font-size: 20px;
`

const ErrorHeader = styled.h1`
  font-size: 50px;
  margin-bottom: 50px;
`
const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
