import { useEffect, useMemo, useState } from 'react'
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
import { fetchMainApi, getMyPage } from '@/api'
import { decoder, sortResponseData } from '@/utils'
import { useNavigate } from 'react-router-dom'
import { useQueries, useQueryClient } from '@tanstack/react-query'

export const CareerMain = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useRecoilState(sideBarState)
  const [closedFilter, setClosedFilter] = useState(0)
  const sortState = useRecoilValue(careerSortGlobalState) // 찜 많은순, 오래된순, 최신순, 모임시작일 순
  const filterState = useRecoilValue(careerFilterGlobalState) // 슬라이드 필터 아이템
  const { filter, onOff, type, job, position, sex } = filterState
  const userId = decoder()?.memberId
  const shouldFetchData = !!userId
  const queryClient = useQueryClient()
  const mainQueryKey = [
    'mainData',
    closedFilter,
    filter,
    onOff,
    type,
    job,
    position,
    sex
  ]

  const careerMainQueries = useQueries({
    queries: [
      {
        queryKey: mainQueryKey,
        queryFn: () =>
          shouldFetchData
            ? fetchMainApi(
                closedFilter,
                filter,
                onOff,
                type,
                job,
                position,
                sex
              )
            : null,
        keepPreviousData: true
      },
      {
        queryKey: ['isProfileCheck', userId],
        queryFn: () => (shouldFetchData ? getMyPage(userId) : null)
      }
    ]
  })

  const mainData = careerMainQueries[0].data?.response

  const isProfileQuery = !!careerMainQueries[1].data?.response?.job
  const sortedData = useMemo(() => {
    if (Array.isArray(mainData)) {
      return sortResponseData(mainData, sortState.filter)
    }
    return []
  }, [mainData, sortState.filter])

  useEffect(() => {
    if (!userId) {
      navigate('/')
    }

    if (closedFilter !== 1) {
      queryClient.prefetchQuery(
        ['mainData', 1, filter, onOff, type, job, position, sex],
        () => fetchMainApi(1, filter, onOff, type, job, position, sex)
      )
    }
  }, [
    userId,
    queryClient,
    closedFilter,
    filter,
    onOff,
    type,
    job,
    position,
    sex
  ])

  const moveToAlarm = () => {
    navigate('/alarm')
  }
  const moveToBack = () => {
    navigate('/home')
  }

  // 마감된 모집 제외 상태 리프팅
  const toggleClosedFilter = (value: number) => {
    setClosedFilter(value)
  }

  const handleSideBar = () => {
    setIsOpen(!isOpen)
  }

  const resLength = Array.isArray(mainData) ? mainData.length : 0

  console.log(mainData)
  const renderContents = () => {
    if (careerMainQueries[0].isLoading && careerMainQueries[1].isLoading)
      return <CommonSpinner />

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
            leftIcon={<ArrowLeft2 onClick={moveToBack} />}
            centerText="같이 성장해요">
            <IconWrapper>
              <SearchNormal1 />
            </IconWrapper>
            <StyledIcon>
              <Notification onClick={moveToAlarm} />
            </StyledIcon>
          </Header>

          <SubHeader
            items={CAREER_SUBHEADER_TEXT}
            initialItem="커리어"
          />

          <CareerMainFilterBar
            toggleSideBar={handleSideBar}
            toggleClosedFilter={toggleClosedFilter}
          />

          <CareerMainCard responseData={sortedData} />

          <CareerMainItemCreateButton isProfile={isProfileQuery} />

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
