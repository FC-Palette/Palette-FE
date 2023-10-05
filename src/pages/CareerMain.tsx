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
import { fetchMainApi, getMyPage } from '@/api'
import { fetchMainResponseDataProps } from '@/types'
import { SortedData, decoder, sortResponseData } from '@/utils'
import { useNavigate } from 'react-router-dom'

export const CareerMain = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [responseData, setResponseData] =
    useState<fetchMainResponseDataProps | null>(null)
  const [isOpen, setIsOpen] = useRecoilState(sideBarState)
  const [closedFilter, setClosedFilter] = useState(0)
  const [sortedResponseData, setSortedResponseData] = useState<SortedData[]>([])
  const sortState = useRecoilValue(careerSortGlobalState) // 찜 많은순, 오래된순, 최신순, 모임시작일 순
  const filterState = useRecoilValue(careerFilterGlobalState) // 슬라이드 필터 아이템
  const { filter, onOff, type, job, position, sex } = filterState
  const userId = decoder()?.memberId
  const [isProfile, setIsProfile] = useState(false)

  useEffect(() => {
    if (!userId) {
      navigate('/')
    }
  }, [userId])

  const moveToAlarm = () => {
    navigate('/alarm')
  }
  const moveToBack = () => {
    navigate(-1)
  }

  // 마감된 모집 제외 상태 리프팅
  const toggleClosedFilter = (value: number) => {
    setClosedFilter(value)
  }

  useEffect(() => {
    const fetchCareerData = async () => {
      const [userData, mainData] = await Promise.all([
        getMyPage(userId),
        fetchMainApi(closedFilter, filter, onOff, type, job, position, sex)
      ])

      const userProfile = userData.response?.job
      if (userProfile) {
        setIsProfile(!isProfile)
      }

      if (mainData) {
        setResponseData(mainData)
        setIsLoading(false)
      }
    }
    fetchCareerData()
  }, [closedFilter, filter, onOff, type, job, position, sex])

  // 토클 sort
  useEffect(() => {
    if (responseData) {
      const sortedData = sortResponseData(
        responseData.response,
        sortState.filter
      )
      setSortedResponseData(sortedData)
    }
  }, [responseData, sortState])

  const handleSideBar = () => {
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

          <CareerMainCard responseData={sortedResponseData} />

          <CareerMainItemCreateButton isProfile={isProfile} />

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
