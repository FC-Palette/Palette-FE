import styled from 'styled-components'
// 미리보기 아이콘
// import { Note, BagHappy, EmojiHappy } from 'iconsax-react'
import { MegaPhoneIcon } from '../common/svgicon/MegaPhoneIcon'
import { theme } from 'styles/index'

export const AlarmList = () => {
  return (
    <AlarmListWrap>
      <PreviewIcon>
        <MegaPhoneIcon $iconColor="blueL1" />
      </PreviewIcon>

      <PreviewInfo>
        <PreviewTitle>제목을 입력하세요.</PreviewTitle>
        <PreviewContent>내용을 입력하세요.</PreviewContent>
        <PreviewDate>날짜</PreviewDate>
      </PreviewInfo>
    </AlarmListWrap>
  )
}

const AlarmListWrap = styled.div`
  display: flex;
  align-items: center;
  height: 77px;
`

const PreviewIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 60px;
  height: 60px;
  background-color: ${theme.greyScale.grey0};
  color: ${theme.main.blueL1};
  margin-left: 24px;
  margin-right: 12px;
  border-radius: 8px;
`

const PreviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 291px;
  height: 61px;
`

const PreviewTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.greyScale.grey8};
`

const PreviewContent = styled.div`
  font-size: 14px;
  color: ${theme.greyScale.grey8};
`

const PreviewDate = styled.div`
  font-size: 14px;
  color: ${theme.greyScale.grey4};
`
