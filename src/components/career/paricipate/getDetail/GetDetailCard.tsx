import styled from 'styled-components'
import {
  GetDetailCategoryChips,
  GetDetailFooterAndButtonGuest,
  GetDetailFooterAndButtonHost,
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
  let isAdmin = true

  const renderFooter = () => {
    switch (isAdmin) {
      case true:
        return <GetDetailFooterAndButtonHost />
      case false:
        return <GetDetailFooterAndButtonGuest />
      default:
        return <GetDetailFooterAndButtonGuest />
    }
  }

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
      {renderFooter()}
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
