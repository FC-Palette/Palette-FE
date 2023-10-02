import styled from 'styled-components'
import { GetTitleAndDescription } from 'components/career/create/isUserInfo/index'
import {
  SecondHandInfo,
  PreviewPrice,
  PreviewHeader,
  PreviewCategory
} from 'components/trades/preview/index'
import { ManagerInfo } from 'components/trades/detail/index'
import { SecondHandDetailResProps } from 'types/trades/index'
import { GetDetailStats } from 'components/career/paricipate/getDetail/index'
import { useEffect, useState } from 'react'
import { SecondHandDetail } from 'api/trades/index'
import { OthertProducts, ImageDetail } from 'components/trades/detail/index'
import { CareerCreateMeetingCommonQuestion } from 'components/career/create/common/index'

export const SecondHandDetailCard = ({ productId }) => {
  const [secondHandDetailList, setSecondHandDetailList] =
    useState<SecondHandDetailResProps | null>(null)

  useEffect(() => {
    const DetailData = async () => {
      try {
        const res = await SecondHandDetail(productId)
        if (res.success) {
          setSecondHandDetailList(res.response)
        } else {
          console.error('서버에서 오류 응답을 받았습니다.')
        }
      } catch (error) {
        console.error('요청을 보낼 때 오류가 발생했습니다.', error)
      }
    }
    DetailData()
  }, [productId])

  return (
    <>
      {secondHandDetailList && (
        <>
          <PreviewHeader title={secondHandDetailList.title} />
          <Wrapper>
            <ImageDetail meetupImages={secondHandDetailList.images} />
            <ManagerInfo
              managerImg={secondHandDetailList.member.image}
              managerInfo={secondHandDetailList.member.bio}
              managerName={secondHandDetailList.member.nickname}
            />
            <PreviewPrice price={secondHandDetailList.price} />
            <GetTitleAndDescription
              detailText="아직 이 중고거래에 대한 소개가 작성되지 않았어요."
              meetupTitle={secondHandDetailList.title}
              meetupDescription={secondHandDetailList.description}
            />
            <PreviewCategory category={secondHandDetailList.category} />
            <GetDetailStats
              hits={secondHandDetailList.bookmarkCount}
              likes={secondHandDetailList.hits}
              createdAt={secondHandDetailList.createdAt}
            />
            <SecondHandInfo
              selectedDays={''}
              transactionStartTime={secondHandDetailList.transactionStartTime}
              transactionEndTime={secondHandDetailList.transactionEndTime}
            />
            <CareerCreateMeetingCommonQuestion>
              사용자님의 다른상품
            </CareerCreateMeetingCommonQuestion>
            <OthertProducts />
          </Wrapper>
        </>
      )}
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  margin-bottom: 30px;
`
//
