import { theme } from 'styles/index'
import { styled } from 'styled-components'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { centralise } from 'styles/index'

export const PreviewUrl = ({ shopUrl }) => {
  const [imageUrl, setImageUrl] = useState<string>('')
  const [metaTitle, setMetaTitle] = useState<string>('')

  useEffect(() => {
    const fetchMetaTags = async () => {
      try {
        const response = await fetch(shopUrl)
        const text = await response.text()
        const parser = new DOMParser()
        const doc = parser.parseFromString(text, 'text/html') // doc 변수를 이 위치에서 정의

        // 이미지 태그를 가져오기
        const imageTag = doc.querySelector('meta[property="og:image"]')
        const imageUrl = imageTag ? imageTag.getAttribute('content') : ''

        // 제목 태그를 가져오기
        const titleTag = doc.querySelector('title')
        const title = titleTag ? titleTag.textContent : '제목이 없습니다.'

        setImageUrl(imageUrl || '') // 이미지 URL 설정
        setMetaTitle(title || '') // 메타 타이틀 설정
      } catch (error) {
        setImageUrl('') // 에러 발생 시 이미지 URL 초기화
        setMetaTitle('')
      }
    }

    fetchMetaTags()
  }, [shopUrl])

  return (
    <Link to={shopUrl}>
      <Wrapper>
        <ImageWrapper>
          <Image>
            <img src={imageUrl}></img>
          </Image>

          <MetaTitle>{metaTitle}</MetaTitle>
          <UrlLink>{shopUrl}</UrlLink>
        </ImageWrapper>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  margin-left: 24px;
  width: 88%;
  height: 215px;
  border-radius: 8px;
  font-size: ${theme.customSize.xxlarge};
  color: ${theme.main.black};
  font-weight: 600;
  background-color: ${theme.greyScale.grey1};
  margin-top: 24px;
  margin-bottom: 5%;
  flex-direction: column;
  ${centralise}
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`

const Image = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const MetaTitle = styled.div`
  font-size: ${theme.customSize.large};
  color: ${theme.greyScale.grey8};
  font-weight: 400;
  padding: 5px 10px;
`
const UrlLink = styled.div`
  font-size: ${theme.customSize.tiny};
  color: ${theme.greyScale.grey4};
  padding: 0px 10px;
`
