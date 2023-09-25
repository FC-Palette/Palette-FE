import React from 'react'
import { SideBarProps } from 'types/index'
import styled from 'styled-components'

export const SideBar: React.FC<SideBarProps> = ({ titles, contents }) => {
  return (
    <>
      {titles?.map((title, index) => (
        <TitleWrapper key={index}>{title}</TitleWrapper>
      ))}
      {contents?.map((content, index) => (
        <ContentWrapper key={index}>{content}</ContentWrapper>
      ))}
    </>
  )
}

const TitleWrapper = styled.div`
  /* 스타일을 적용할 수 있는 CSS 코드 */
  /* isOpen에 따라 사이드바 스타일을 변경할 수 있음 */
`

const ContentWrapper = styled.div`
  /* 스타일을 적용할 수 있는 CSS 코드 */
  /* isOpen에 따라 사이드바 스타일을 변경할 수 있음 */
`
