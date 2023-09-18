// 좋아요수, 조회수, 게시글 생성시간 등

import styled from 'styled-components'

export const GetStats = () => {
  return (
    <>
      <Container>
        <IconWrap>
          <Like>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.41618 13.9922C8.18952 14.0722 7.81618 14.0722 7.58952 13.9922C5.65618 13.3322 1.33618 10.5789 1.33618 5.91221C1.33618 3.85221 2.99618 2.18555 5.04285 2.18555C6.25618 2.18555 7.32952 2.77221 8.00285 3.67888C8.67618 2.77221 9.75618 2.18555 10.9628 2.18555C13.0095 2.18555 14.6695 3.85221 14.6695 5.91221C14.6695 10.5789 10.3495 13.3322 8.41618 13.9922Z"
                stroke="#4B5563"
              />
            </svg>
          </Like>
          0
          <View>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.3895 8.11909C10.3895 9.43909 9.32288 10.5058 8.00288 10.5058C6.68288 10.5058 5.61621 9.43909 5.61621 8.11909C5.61621 6.79909 6.68288 5.73242 8.00288 5.73242C9.32288 5.73242 10.3895 6.79909 10.3895 8.11909Z"
                stroke="#4B5563"
              />
              <path
                d="M8.00283 13.6329C10.3562 13.6329 12.5495 12.2463 14.0762 9.84628C14.6762 8.90628 14.6762 7.32628 14.0762 6.38628C12.5495 3.98628 10.3562 2.59961 8.00283 2.59961C5.64949 2.59961 3.45616 3.98628 1.92949 6.38628C1.32949 7.32628 1.32949 8.90628 1.92949 9.84628C3.45616 12.2463 5.64949 13.6329 8.00283 13.6329Z"
                stroke="#4B5563"
              />
            </svg>
          </View>
          0<Dot>・</Dot>
          <Time>1분 전</Time>
        </IconWrap>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 430px;
  display: flex;
`

const IconWrap = styled.div`
  display: flex;
  gap: 4px;
  color: ${props => props.theme.greyScale.grey6};
  margin: 12px 24px 0;
`
const Time = styled.div`
  font-size: 14px;
`

const Dot = styled.div``
const Like = styled.div``
const View = styled.div``
