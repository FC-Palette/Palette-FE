import { requestMeetingCloseApi, requestMeetingReopenApi } from '@/api'
import { Button } from '@/components'
import { fetchDetailGlobalState, fetchDetailMemberState } from '@/recoil'
import { theme } from '@/styles'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

export const GetDetailFooterAndButtonHost = ({ loggedInUser }) => {
  const { detailid } = useParams()
  const atom = useRecoilValue(fetchDetailGlobalState)
  const memberAtom = useRecoilValue(fetchDetailMemberState)
  const [closing, setClosing] = useState(atom.closing)
  const { headCount } = atom
  const roomId = detailid
  const isRecruitmentClosed = +headCount - memberAtom.length // headCount: 모집 인원, recruitedPersonnel: 모집된 인원

  if (!loggedInUser) {
    return
  }
  if (!roomId) {
    return null
  }

  useEffect(() => {
    const closeRoom = async () => {
      if (isRecruitmentClosed === 0) {
        await requestMeetingCloseApi(roomId)
      }
    }

    closeRoom()
  }, [])

  const handleButtonClick = async () => {
    if (isRecruitmentClosed === 0) {
      return
    }
    const api = closing ? requestMeetingReopenApi : requestMeetingCloseApi
    const res = await api(roomId)

    console.log(res)

    if (res) {
      setClosing(!closing)
    }
  }

  let buttonText = ''
  if (isRecruitmentClosed === 0) {
    buttonText = '모집 종료되었습니다.'
  } else if (closing) {
    buttonText = '다시 모집하기'
  } else {
    buttonText = '모집 마감하기'
  }

  const bgColor = isRecruitmentClosed ? '' : theme.greyScale.grey2
  const borderColor = isRecruitmentClosed ? '' : theme.greyScale.grey2
  const color = isRecruitmentClosed ? '' : theme.greyScale.grey3

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
            $bgColor={bgColor}
            $borderColor={borderColor}
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
