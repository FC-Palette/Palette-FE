import styled from 'styled-components'
import { CommonLikeIcon, CommonViewIcon } from '@/components'
import { useRecoilValue } from 'recoil'
import { fetchDetailRecommendState } from '@/recoil'
import { useNavigate } from 'react-router-dom'
import { renderCareerCommonTitle } from '@/utils'

export const GetDetailSimilarMeetupInfo = () => {
  const recommendations = useRecoilValue(fetchDetailRecommendState)
  const navigate = useNavigate()

  const checkTitleLength = (title: string, length: number) => {
    return title.length > length ? title.slice(0, length) + '...' : title
  }

  return (
    <>
      {renderCareerCommonTitle('비슷한 모임 추천')}
      <Container>
        {recommendations.map((recommendation, index) => (
          <CardContainer
            key={index}
            onClick={() => navigate(`/detail/${recommendation.id}`)}>
            {/* Render each recommendation here */}
            <CardImage src={recommendation.image[index]} />
            <CardCategoryChipsWrap>
              {recommendation.jobs.slice(0, 2).map((job, jobIndex) => (
                <CardCategoryChip key={jobIndex}>{job}</CardCategoryChip>
              ))}
            </CardCategoryChipsWrap>
            <CardTitle>{checkTitleLength(recommendation.title, 15)}</CardTitle>
            <CardMeetupInfoRowWrap>
              {recommendation.week} {recommendation.time}
            </CardMeetupInfoRowWrap>
            <IconWrapper>
              <CommonLikeIcon size={14} />
              {recommendation.likes}
              <CommonViewIcon size={14} />
              {recommendation.hits}
            </IconWrapper>
          </CardContainer>
        ))}
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  margin: 2.5% 6.4% 3.5%;
  gap: 16px;
  max-width: 430px;
  margin-bottom: 50px;

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
  height: 137px;
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
  overflow-x: scroll;
`

const CardCategoryChip = styled.div`
  flex: 1;
  width: auto;
  max-height: 25px;
  color: ${props => props.theme.greyScale.grey7};
  background-color: ${props => props.theme.greyScale.grey2};
  font-size: 14px;
  line-height: 16.71px;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
  overflow-x: auto;

  @media screen and (max-width: 320px) {
    & {
      font-size: 10px;
    }
  }

  @media screen and (max-width: 375px) {
    & {
      font-size: 12px;
    }
  }
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
