import { styled } from 'styled-components'
import { useRef } from 'react'

export const ChatInput = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null)

  //해당 로직들 input이 아니라 화면으로 적용?
  // useEffect(() => {
  //   handleResizeHeight()
  // }, [])

  // const handleResizeHeight = () => {
  //   if (inputRef?.current) {
  //     inputRef.current.style.height = 'auto' //height 초기화
  //     inputRef.current.style.height = inputRef?.current.scrollHeight + 'px'
  //   }
  // }

  return (
    <>
      <StyledInput
        ref={inputRef}
        rows={1}
        // onInput={handleResizeHeight}
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
  &:focus {
    outline: none;
  }
`
