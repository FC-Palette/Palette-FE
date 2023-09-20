import styled from 'styled-components'
import {
  GetDetailCategoryChips,
  GetDetailFooterAndButton,
  GetDetailHeader,
  GetDetailManagerInfo,
  GetDetailMeetupInfo,
  GetDetailMembersInfo,
  GetDetailSimilarMeetupInfo,
  GetDetailStats,
  GetDetailThumbnail,
  GetDetailTitleAndDescription
} from '.'

export const GetDetailCard = () => {
  return (
    <>
      <Card>
        <GetDetailHeader />
        <GetDetailThumbnail />
        <GetDetailManagerInfo />
        <GetDetailTitleAndDescription />
        <GetDetailCategoryChips />
        <GetDetailStats />
        <GetDetailMeetupInfo />
        <GetDetailMembersInfo />
        <GetDetailSimilarMeetupInfo />
        <GetDetailFooterAndButton />
      </Card>
    </>
  )
}

const Card = styled.div`
  width: 430px;
`
