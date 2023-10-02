import { requestMeetingCloseApi } from '@/api'
import { Button } from '@/components'

import styled from 'styled-components'

export const GetDetailFooterAndButtonHost = ({ closing, meetingId }) => {
  console.log('footer: ', closing)
  const isClosed = closing
  const roomId = meetingId

  const handleButtonClick = async () => {
    const response = await requestMeetingCloseApi(roomId)
    if (response) {
      console.log('완료')
    }
  }

  const renderText = (isClosed: boolean) => {
    const text = isClosed ? '다시 모집하기' : '모집 마감하기'
    return text
  }

  return (
    <>
      <Wrapper>
        <BtnWrap>
          <Button
            onClick={() => handleButtonClick}
            $btnWidth="100%"
            $btnHeight="60px"
            $fontSize="20px"
            $borderRadius="8px">
            {renderText(isClosed)}
          </Button>
        </BtnWrap>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  position: sticky;
  width: 100%;
  max-width: 430px;
  min-height: 80px;
  z-index: 100;
  bottom: 0;
  background-color: ${props => props.theme.main.white};
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.2);
`

const BtnWrap = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  width: 100%;
  margin: 0 24px;
`
