import styled, { keyframes } from 'styled-components'

// Define the keyframe for the pulse animation
const pulse = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const CommonSpinner = () => {
  return (
    <Container>
      <LoadingSpinner>Loading...</LoadingSpinner>
    </Container>
  )
}

const Container = styled.div`
  width: 120px;
  height: 120px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;
`

const LoadingSpinner = styled.div`
  display: grid;
  place-content: center;
  width: 150px;
  height: 150px;
  position: relative;
  text-align: center;
  color: ${props => props.theme.greyScale.grey9};
  font-size: 20px;

  &::after {
    position: absolute;
    box-sizing: border-box;
    content: '';
    width: 150px;
    height: 150px;
    top: 0;
    left: 0;
    border-radius: 50%;
    border-top: 7px solid ${props => props.theme.main.blueSpin};
    border-right: 7px solid transparent;
    animation: ${rotate} 2s linear infinite;
  }

  animation: ${pulse} 2s linear infinite;
`
