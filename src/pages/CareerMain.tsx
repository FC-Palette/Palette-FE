import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { ArrowLeft2, SearchNormal1, Notification } from 'iconsax-react'
import {
  CommonSpinner,
  Footer,
  Header,
  SubHeader
} from 'components/common/index'
import { CAREER_SIDEBAR_ITMES, CAREER_SUBHEADER_TEXT } from 'constants/index'
import {
  CareerMainCard,
  CareerMainFilterBar,
  CareerMainItemCreateButton,
  CareerSideBar
} from '@/components/career'
import {
  careerFilterGlobalState,
  careerSortGlobalState,
  sideBarState
} from 'recoil/index'
import { fetchMainApi } from '@/api'
import { fetchMainResponseDataProps } from '@/types'
import { SortedData, sortResponseData } from '@/utils'

export const CareerMain = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [responseData, setResponseData] =
    useState<fetchMainResponseDataProps | null>(null)
  const [isOpen, setIsOpen] = useRecoilState(sideBarState)
  const [closedFilter, setClosedFilter] = useState(0)
  const [sortedResponseData, setSortedResponseData] = useState<SortedData[]>([])
  const sortState = useRecoilValue(careerSortGlobalState)
  const filterState = useRecoilValue(careerFilterGlobalState)
  const { filter, onOff, type, job, position, sex } = filterState

  // 마감된 모집 제외
  const toggleClosedFilter = (value: number) => {
    setClosedFilter(value)
  }

  // 필터 결과
  const fetchMainData = async () => {
    const data = await fetchMainApi(
      closedFilter,
      filter,
      onOff,
      type,
      job,
      position,
      sex
    )
    setResponseData(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMainData()
  }, [closedFilter, filter, onOff, type, job, position, sex])

  // 찜 많은순, 오래된순, 최신순, 모임시작일 순...
  useEffect(() => {
    if (responseData) {
      const sortedData = sortResponseData(
        responseData.response,
        sortState.filter
      )
      setSortedResponseData(sortedData)
    }
  }, [responseData, sortState])

  const toggleSideBar = () => {
    setIsOpen(!isOpen)
  }

  const resLength = responseData?.response?.length || 0

  const renderContents = () => {
    if (isLoading) return <CommonSpinner />

    return (
      <>
        {isOpen && (
          <CareerSideBar
            centerText="커리어"
            items={CAREER_SIDEBAR_ITMES}
            count={resLength}
          />
        )}

        <Wrap>
          <Header
            leftIcon={<ArrowLeft2 />}
            centerText="같이 성장해요">
            <IconWrapper>
              <SearchNormal1 />
            </IconWrapper>
            <StyledIcon>
              <Notification />
            </StyledIcon>
          </Header>

          <SubHeader
            items={CAREER_SUBHEADER_TEXT}
            initialItem="커리어"
          />

          <CareerMainFilterBar
            toggleSideBar={toggleSideBar}
            toggleClosedFilter={toggleClosedFilter}
          />

          <CareerMainCard responseData={sortedResponseData} />

          <CareerMainItemCreateButton />

          <Footer />
        </Wrap>
      </>
    )
  }

  return renderContents()
}

const Wrap = styled.div`
  height: 100%;
  position: relative;
  overflow-y: auto;
`

const StyledIcon = styled.button``
const IconWrapper = styled.button`
  margin-right: 10px;
`

export default CareerMain
