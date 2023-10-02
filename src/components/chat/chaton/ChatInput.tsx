import { styled } from 'styled-components'
import { useEffect } from 'react'
export const ChatInput = ({ inputRef, onEnterPress }) => {
  useEffect(() => {
    handleResizeHeight()
  }, [])

  const handleResizeHeight = () => {
    if (inputRef?.current) {
      inputRef.current.style.height = 'auto' //height 초기화
      inputRef.current.style.height = inputRef?.current.scrollHeight + 'px'
    }
  }

  return (
    <>
      <StyledInput
        ref={inputRef}
        rows={1}
        onInput={handleResizeHeight}
        onKeyDown={onEnterPress}
      />
    </>
  )
}

const StyledInput = styled.textarea`
  width: 100%;
  padding: 10px 16px;
  border: none;
  border-radius: 21px;
  max-height: 114px;
  resize: none;
  touch-action: manipulation;
  font-family: 'Pretendard', sans-serif;
  &:focus {
    outline: none;
  }
`
