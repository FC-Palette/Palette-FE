import { styled } from 'styled-components'
import { useEffect } from 'react'
export const ChatInput = ({ inputRef, sendMessage, client }) => {
  useEffect(() => {
    handleResizeHeight()
  }, [])

  const handleResizeHeight = () => {
    if (inputRef?.current) {
      inputRef.current.style.height = 'auto' //height 초기화
      inputRef.current.style.height = inputRef?.current.scrollHeight + 'px'
    }
  }
  const onEnterPress = e => {
    if (e.key === 'Enter' && client) {
      e.preventDefault()
      sendMessage(e.target.value)
      inputRef.current.value = ''
      inputRef.current.style.height = 'auto'
      return
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
