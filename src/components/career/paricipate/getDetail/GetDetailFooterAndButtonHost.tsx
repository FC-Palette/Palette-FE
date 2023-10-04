import { requestMeetingCloseApi, requestMeetingReopenApi } from '@/api'
import { Button } from '@/components'
import { fetchDetailGlobalState } from '@/recoil'
import { theme } from '@/styles'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

export const GetDetailFooterAndButtonHost = () => {
  const { detailid } = useParams()
  const atom = useRecoilValue(fetchDetailGlobalState)
  const { closing } = atom
  const roomId = detailid

  if (!roomId) {
    return null
  }

  const handleButtonClick = async () => {
    let api
    if (closing) {
      api = requestMeetingReopenApi
    } else {
      api = requestMeetingCloseApi
    }

    const res = await api(roomId)
    console.log(res)
  }

  const buttonText = closing ? '모집 종료' : '모집 마감하기'
  const bgColor = closing ? theme.greyScale.grey2 : ''
  const borderColor = closing ? theme.greyScale.grey2 : ''
  const color = closing ? theme.greyScale.grey3 : ''

  return (
    <>
      <Wrapper>
        <BtnWrap>
          <Button
            onClick={() => handleButtonClick()}
            $btnWidth="100%"
            $btnHeight="60px"
            $fontSize="20px"
            $borderRadius="8px"
            $borderColor={borderColor}
            $bgColor={bgColor}
            color={color}>
            {buttonText}
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
