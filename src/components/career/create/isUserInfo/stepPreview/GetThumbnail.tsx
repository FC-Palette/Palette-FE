import styled from 'styled-components'

export const GetThumbnail = () => {
  return (
    <>
      <ThumbnailImg />
    </>
  )
}

const ThumbnailImg = styled.div`
  width: 430px;
  height: 322px;
  background-color: ${props => props.theme.greyScale.grey5};
`
