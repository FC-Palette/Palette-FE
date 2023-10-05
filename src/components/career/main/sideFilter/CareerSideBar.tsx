import React, { useEffect, useState } from 'react'
import { SideBarProps } from 'types/index'
import styled from 'styled-components'
import { theme } from 'styles/index'
import { Header, Background } from 'components/common/index'
import { ArrowLeft2, ArrowRotateRight } from 'iconsax-react'
import { useRecoilState } from 'recoil'
import { careerFilterGlobalState, sideBarState } from 'recoil/index'

export interface SelectedAnswerProps {
  $isSelected?: boolean
  onClick: () => void
}
export const defaultFilterState = {
  filter: '',
  onOff: '',
  type: '',
  job: [] as string[],
  position: [] as string[],
  sex: ''
}

export const CareerSideBar: React.FC<SideBarProps> = ({
  items,
  centerText,
  count
}) => {
  const [isOpen, setIsOpen] = useRecoilState(sideBarState)
  const [filterState, setFilterState] = useRecoilState(careerFilterGlobalState)
  const [rightPosition, setRightPosition] = useState<string>('-100%')

  if (!filterState) {
    setFilterState(defaultFilterState)
  }

  // Contents를 클릭할 때 호출될 함수
  const currentFilterState = { ...filterState }
  
  const handleContentClick = (content: string, title: string) => {
    currentFilterState.job = currentFilterState.job || []
    currentFilterState.position = currentFilterState.position || []

    if (title === '직무') {
      currentFilterState.job.includes(content)
        ? (currentFilterState.job = currentFilterState.job.filter(
            item => item !== content
          ))
        : (currentFilterState.job = [...currentFilterState.job, content])
    } else if (title === '성별') {
      currentFilterState.sex = currentFilterState.sex === content ? '' : content
    } else if (title === '온・오프') {
      currentFilterState.onOff =
        currentFilterState.onOff === content ? '' : content
    } else if (title === '직급') {
      currentFilterState.position = currentFilterState.position.includes(
        content
      )
        ? currentFilterState.position.filter(item => item !== content)
        : [...currentFilterState.position, content]
    } else if (title === '종류') {
      currentFilterState.type =
        currentFilterState.type === content ? '' : content
    }

    setFilterState(currentFilterState)
  }

  // 가시 확인 함수
  const isItemSelected = (content: string, title: string, filterState: any) => {
    if (title === '직무') {
      return filterState.job.includes(content)
    } else if (title === '성별') {
      return filterState.sex === content
    } else if (title === '직급') {
      return filterState.position.includes(content)
    } else if (title === '종류') {
      return filterState.type === content
    } else if (title === '온・오프') {
      return filterState.onOff === content
    }

    return false
  }

  const handleCancelSide = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setRightPosition('0%')
      }, 0)
    } else {
      setRightPosition('-100%')
    }
  }, [isOpen])

  return (
    <>
      <Background />
      <SideBarWrapper $rightPosition={rightPosition}>
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
              <ArrowRotateRight
                onClick={() => setFilterState(defaultFilterState)}
              />
            </StyledIcon>
          }
          $borderRadius="25px 0px 0px 0px"
        />

        {items?.map((item, key) => (
          <div key={key}>
            <TitlesWrap>{item.title}</TitlesWrap>
            <ContentsWrap>
              {Array.isArray(item.content) &&
                item.content.map((content, index) => (
                  <Contents
                    key={index}
                    $isSelected={isItemSelected(
                      content,
                      item.title,
                      filterState
                    )}
                    onClick={() => handleContentClick(content, item.title)}>
                    {content}
                  </Contents>
                ))}
            </ContentsWrap>
          </div>
        ))}

        <FooterWrapper>{count}건의 검색결과</FooterWrapper>
      </SideBarWrapper>
    </>
  )
}

const StyledIcon = styled.div<{ $isOpen?: boolean }>`
  color: ${theme.main.black};
  font-size: ${theme.customSize.xxlarge};
  cursor: pointer;
`

const SideBarWrapper = styled.div<{ $rightPosition: string }>`
  width: 94%;
  height: 100%;
  background-color: ${theme.main.white};
  position: absolute;
  right: ${props => props.$rightPosition};
  z-index: 1000;
  border-radius: 25px 0px 0px 0px;
  transition: right 0.5s;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

const TitlesWrap = styled.div`
  color: ${theme.greyScale.grey6};
  font-size: 18px;
  margin-left: 24px;
  font-weight: 700;
`

const ContentsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 12px 24px;
  position: sticky;
`

const Contents = styled.div<SelectedAnswerProps>`
  border-radius: 20px;
  padding: 12px;
  cursor: pointer;
  background-color: ${props =>
    props.$isSelected
      ? props.theme.subColor.blie10
      : props.theme.subColor.blueGrey};
  color: ${props => (props.$isSelected ? props.theme.main.blue0 : '#000')};
`

const FooterWrapper = styled.button<{ $isOpen?: boolean }>`
  height: 80px;
  background-color: ${theme.main.blue0};

  /* top: 100%; */
  bottom: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 20px;
  color: ${theme.main.white};
`
