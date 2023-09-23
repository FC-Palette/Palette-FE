import styled from 'styled-components'
import { CareerCreateMeetingCommonQuestion } from '../..'
import { CommonLikeIcon, CommonViewIcon } from '@/components'
export const GetDetailSimilarMeetupInfo = () => {
  const dummyObj = {
    dummyImage: ['url1', 'url2'],
    dummyCategory: ['카테고리', '카테고리', '카테고리', '카테고리', '카테고리'],
    dummyTitle:
      '출근 전 트렌드 분석출근 전 트렌드 분석 출근 전 트렌드 분석출근 전 트렌드 분석',
    dummyLike: 7234,
    dummyView: 72342
  }

  const { dummyCategory, dummyTitle, dummyLike, dummyView } = dummyObj

  const checkTitleLength = (title: string, length: number) => {
    const splitTitle = title.split('')
    return splitTitle.length > length
      ? splitTitle.splice(0, length).join('') + '...'
      : title
  }

  return (
    <>
      <CareerCreateMeetingCommonQuestion>
        비슷한 모임 추천
      </CareerCreateMeetingCommonQuestion>

      <Container>
        <CardContainer>
          <CardImage
            src={
              'https://images.velog.io/images/mokyoungg/post/6659a8e8-5234-49e5-b3da-a3816c08bfdc/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%EB%A1%9C%EA%B3%A0.svg'
            }
          />
          <CardCategoryChipsWrap>
            {dummyCategory.slice(0, 2).map((item, index) => (
              <CardCategoryChip key={index}>{item}</CardCategoryChip>
            ))}
          </CardCategoryChipsWrap>
          <CardTitle>{checkTitleLength(dummyTitle, 15)}</CardTitle>
          <CardMeetupInfoRowWrap>매주 월요일 · AM 08:00</CardMeetupInfoRowWrap>
          <IconWrapper>
            <CommonLikeIcon size={14} />
            {dummyLike}
            <CommonViewIcon size={14} />
            {dummyView}
          </IconWrapper>
        </CardContainer>
        <CardContainer>
          <CardImage
            src={
              'https://images.velog.io/images/mokyoungg/post/6659a8e8-5234-49e5-b3da-a3816c08bfdc/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%EB%A1%9C%EA%B3%A0.svg'
            }
          />
          <CardCategoryChipsWrap>
            {dummyCategory.slice(0, 2).map((item, index) => (
              <CardCategoryChip key={index}>{item}</CardCategoryChip>
            ))}
          </CardCategoryChipsWrap>
          <CardTitle>{checkTitleLength(dummyTitle, 15)}</CardTitle>
          <CardMeetupInfoRowWrap>매주 월요일 · AM 08:00</CardMeetupInfoRowWrap>
          <IconWrapper>
            <CommonLikeIcon size={14} />
            {dummyLike}
            <CommonViewIcon size={14} />
            {dummyView}
          </IconWrapper>
        </CardContainer>
      </Container>
    </>
  )
}

// 수정전
// 타이틀 이하 전체 컨테이너
// const Container = styled.div`
//   display: flex;
//   margin: 2.5% 6.4% 3.5%;
//   gap: 16px;
//   width: 382px;
//   height: 272px;
// `

// // 카드 모양
// const CardContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 183px;
//   height: 272px;
//   box-shadow: 0px 8px 16px ${props => props.theme.greyScale.grey3};
//   border-radius: 8px;
//   cursor: pointer;

//   @keyframes rotate {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }

//   &:hover {
//     box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.5);
//     /* animation: rotate 2s linear infinite; // 2초 동안 한 바퀴 빙글빙글 회전 */
//   }
// `

// const CardImage = styled.img`
//   width: 183px;
//   height: 137px;
//   object-fit: cover;
//   border-top-right-radius: inherit;
//   border-top-left-radius: inherit;
// `

// const CardCategoryChipsWrap = styled.div`
//   margin: 17px 0 0 8px;
//   width: 175px;
//   height: 25px;
//   overflow-x: hidden;
//   display: flex;
//   gap: 4px;
// `

// const CardCategoryChip = styled.div`
//   width: auto;
//   height: 25px;
//   color: ${props => props.theme.greyScale.grey7};
//   background-color: ${props => props.theme.greyScale.grey2};
//   font-size: 14px;
//   line-height: 16.71px;
//   padding: 4px 8px;
//   border-radius: 4px;
//   white-space: nowrap;
// `

// const CardTitle = styled.div`
//   margin: 5px 0 0 12px;
//   width: 153px;
//   height: 38px;
//   overflow: hidden;
//   white-space: wrap;
//   text-overflow: ellipsis;
//   font-size: 16px;
// `

// const CardMeetupInfoRowWrap = styled.div`
//   margin: 4px 0 0 12px;
//   display: flex;
//   flex-wrap: nowrap;
//   text-overflow: ellipsis;
//   font-size: 12px;
//   color: ${props => props.theme.greyScale.grey9};
// `

// const IconWrapper = styled.div`
//   display: flex;
//   font-size: 10px;
//   margin-top: 6px;
//   margin-left: 12px;
//   gap: 4px;
//   color: ${props => props.theme.greyScale.grey6};
//   justify-content: flex-start;
//   align-items: center;
// `

// 수정후 (9.23)
const Container = styled.div`
  display: flex;
  margin: 2.5% 6.4% 3.5%;
  gap: 16px;
  max-width: 430px;

  @media (max-width: 215px) {
    flex-direction: column;
    transition: 0.3s ease;
  }
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 183px; /* 최대 너비 설정 */
  max-height: 272px;
  width: 100%;
  height: 100%;
  box-shadow: 0px 8px 16px ${props => props.theme.greyScale.grey3};
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.5);
  }
`

const CardImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 137px;
  max-width: 183px;
  object-fit: cover;
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
`

const CardCategoryChipsWrap = styled.div`
  margin: 7% 5% 3%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  gap: 4px;
`

const CardCategoryChip = styled.div`
  flex: 1;
  width: auto;
  max-height: 23px;
  max-width: 65px;
  color: ${props => props.theme.greyScale.grey7};
  background-color: ${props => props.theme.greyScale.grey2};
  font-size: 14px;
  line-height: 16.71px;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
`

const CardTitle = styled.div`
  margin: 5px 0 0 12px;
  flex: 1;
  max-width: 130px;
  white-space: wrap;
  text-overflow: ellipsis;
  font-size: 16px;
`

const CardMeetupInfoRowWrap = styled.div`
  margin: 4px 0 0 12px;
  flex: 1;
  max-width: 130px;
  text-overflow: ellipsis;
  white-space: wrap;
  font-size: 12px;
  color: ${props => props.theme.greyScale.grey9};
`

const IconWrapper = styled.div`
  flex: 1;
  font-size: 10px;
  margin: 6px 0 6px 12px;
  gap: 4px;
  color: ${props => props.theme.greyScale.grey6};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`
