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
  )
}

const Card = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
`
