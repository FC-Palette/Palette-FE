import React from 'react'
import { SideBarProps } from 'types/index'
import styled from 'styled-components'
import { theme } from 'styles/index'
import { Header, Background } from 'components/common/index'
import { ArrowLeft2, ArrowRotateRight } from 'iconsax-react'
import { useRecoilState } from 'recoil'
import { sideBarState } from 'recoil/index'

export const SideBar: React.FC<SideBarProps> = ({
  items,
  count,
  centerText
}) => {
  const [isOpen, setIsOpen] = useRecoilState(sideBarState)

  const handleCancelSide = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Background />
      <SideBarWrapper>
        <Header
          cancelClick={handleCancelSide}
          leftIcon={
            <StyledIcon>
              <ArrowLeft2 />
            </StyledIcon>
          }
          centerText={centerText}
          children={
            <StyledIcon>
              <ArrowRotateRight />
            </StyledIcon>
          }
          $borderRadius="25px 0px 0px 0px"></Header>

        {items?.map((item, index) => (
          <FilterWrapper key={index}>
            <TitleWrapper $isOpen={isOpen}>{item.title}</TitleWrapper>

            {Array.isArray(item.content) ? (
              item.content.map((content, contentIndex) => (
                <ContentWrapper
                  key={contentIndex}
                  $isOpen={isOpen}>
                  <ContentWrap>{content}</ContentWrap>
                </ContentWrapper>
              ))
            ) : (
              <ContentWrapper $isOpen={isOpen}>{item.content}</ContentWrapper>
            )}
          </FilterWrapper>
        ))}

        <FooterWrapper>{count}건의 검색결과</FooterWrapper>
      </SideBarWrapper>
    </>
  )
}

const SideBarWrapper = styled.div<{ $isOpen?: boolean }>`
  width: 94%;
  height: 100%;
  background-color: ${theme.main.white};
  position: fixed;
  right: 0px;
  z-index: 1000;
  border-radius: 25px 0px 0px 0px;
  transition: right 0.3s;
`

const FooterWrapper = styled.button<{ $isOpen?: boolean }>`
  width: 100%;
  height: 80px;
  background-color: ${theme.main.blue0};
  bottom: 0px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${theme.main.white};
`
const TitleWrapper = styled.div<{ $isOpen?: boolean }>`
  font-size: ${theme.customSize.xlarge};
  color: ${theme.greyScale.grey6};
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px;
`

const ContentWrap = styled.div<{ $isOpen?: boolean }>`
  display: flex;
`

const FilterWrapper = styled.div<{ $isOpen?: boolean }>`
  width: 100%;
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  gap: 15px;
`
const ContentWrapper = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  border-radius: 20px;
  height: 43px;
  font-size: ${theme.customSize.medium};
  background-color: ${theme.greyScale.blueGrey};
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
`

const StyledIcon = styled.div<{ $isOpen?: boolean }>`
  color: ${theme.main.black};
  font-size: ${theme.customSize.xxlarge};
`
