import React, { useEffect, useState } from 'react'
import { SideBarProps } from 'types/index'
import styled from 'styled-components'
import { theme } from 'styles/index'
import { Header, Background } from 'components/common/index'
import { ArrowLeft2, ArrowRotateRight } from 'iconsax-react'
import { useRecoilState } from 'recoil'
import { sideBarState } from 'recoil/index'
import {
  SecondHandFilterState,
  FilteredDataState
} from 'recoil/tradescreateglobalstate'
import { secondHandFilterApi } from 'api/trades/index'
import { categoryMapping } from 'constants/trades/index'

export const defaultFilterState = {
  category: [] as string[],
  minPrice: 0,
  maxPrice: 0
}

export const SecondHandSideBar: React.FC<SideBarProps> = ({
  items,
  count,
  centerText
}) => {
  const [isOpen, setIsOpen] = useRecoilState(sideBarState)
  const [rightPosition, setRightPosition] = useState<string>('-100%')
  const [secondHandFilterGlobalState, setSecondHandFilterGlobalState] =
    useRecoilState(SecondHandFilterState)
  const [filteredData, setFilteredData] = useRecoilState(FilteredDataState)

  const handleCancelSide = () => {
    setIsOpen(false)
  }

  const handleCategoryClick = async (category: string) => {
    try {
      const currentCategories = secondHandFilterGlobalState.category || []

      const newCategories = currentCategories.includes(category)
        ? currentCategories.filter(cat => cat !== category)
        : [...currentCategories, category] // 선택

      // Recoil 상태 업데이트
      setSecondHandFilterGlobalState(prevState => ({
        ...prevState,
        category: newCategories
      }))

      // API 요청 보내기
      const categoryKeys = newCategories.map(
        cat => categoryMapping[cat] || cat
      ) as string[]

      const categoryKeysCombined = categoryKeys.join(',')
      const data = await secondHandFilterApi(categoryKeysCombined)
      const filteredDataJSON = JSON.stringify(data)

      if (filteredData) {
        // JSON 데이터를 파싱하여 문자열 배열로 변경
        setFilteredData([filteredDataJSON])
      }
      console.log('카테고리', secondHandFilterGlobalState)
      console.log('필터 데이터:', data)
      console.log('필터링된 데이터:', filteredData)
    } catch (error) {
      console.error('API 호출 중 에러 발생:', error)
    }
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
                onClick={() =>
                  setSecondHandFilterGlobalState(defaultFilterState)
                }
              />
            </StyledIcon>
          }
          $borderRadius="25px 0px 0px 0px"></Header>
        <MainWrapper>
          {items?.map((item, index) => (
            <FilterWrapper key={index}>
              <TitleWrapper $isOpen={isOpen}>{item.title}</TitleWrapper>
              {Array.isArray(item.content) ? (
                item.content.map((content, contentIndex) => (
                  <ContentWrapper
                    key={contentIndex}
                    $isOpen={isOpen}
                    $isSelected={
                      secondHandFilterGlobalState.category
                        ? secondHandFilterGlobalState.category.includes(
                            categoryMapping[content]
                          )
                        : false
                    }
                    onClick={() =>
                      handleCategoryClick(categoryMapping[content])
                    }>
                    {content}
                  </ContentWrapper>
                ))
              ) : (
                <ContentWrapper
                  $isOpen={isOpen}
                  $isSelected={
                    secondHandFilterGlobalState.category
                      ? secondHandFilterGlobalState.category.includes(
                          categoryMapping[item.content]
                        )
                      : false
                  }
                  onClick={() =>
                    handleCategoryClick(categoryMapping[item.content])
                  }>
                  {item.content}
                </ContentWrapper>
              )}
            </FilterWrapper>
          ))}
          <FilterWrapper></FilterWrapper>
        </MainWrapper>
        <FooterWrapper
          onClick={() => {
            handleCancelSide()
          }}>
          {count}건의 검색결과
        </FooterWrapper>
      </SideBarWrapper>
    </>
  )
}

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

const FooterWrapper = styled.div<{ $isOpen?: boolean }>`
  height: 80px;
  background-color: ${theme.main.blue0};
  bottom: 0;
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 20px;
  color: ${theme.main.white};
  cursor: pointer;
`
const TitleWrapper = styled.div<{ $isOpen?: boolean }>`
  font-size: ${theme.customSize.xlarge};
  color: ${theme.greyScale.grey6};
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px;
`

const MainWrapper = styled.div`
  height: 100%;
`

const FilterWrapper = styled.div<{ $isOpen?: boolean }>`
  width: 100%;
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  gap: 15px;
`
const ContentWrapper = styled.div<{ $isOpen?: boolean; $isSelected?: boolean }>`
  display: flex;
  border-radius: 20px;
  height: 43px;
  font-size: ${theme.customSize.medium};
  background-color: ${({ $isSelected }) =>
    $isSelected ? theme.subColor.blie10 : theme.greyScale.blueGrey};
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  color: ${({ $isSelected }) => ($isSelected ? theme.main.blueL1 : 'inherit')};
`

const StyledIcon = styled.div<{ $isOpen?: boolean }>`
  color: ${theme.main.black};
  font-size: ${theme.customSize.xxlarge};
  cursor: pointer;
`
