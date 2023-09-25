import { Button } from '@/components'
import styled from 'styled-components'
import { BrushSquare } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'

export const CareerMainItemCreateButton = () => {
  const naviage = useNavigate()
  const handleClickBtn = () => {
    naviage('/profile/1')
  }
  return (
    <>
      <BtnLocationChangeDiv>
        <Button
          $borderRadius="24px"
          $bgColor="#FF706F"
          $borderColor="#FF706F"
          onClick={handleClickBtn}>
          <Gap>
            {<BrushSquare />}
            글쓰기
          </Gap>
        </Button>
      </BtnLocationChangeDiv>
    </>
  )
}

// 버튼 위치 조절 스타일러
const BtnLocationChangeDiv = styled.div`
  position: fixed;
  top: 82%;
  z-index: 1;
  margin-left: 260px;

  @media (max-width: 482px) {
    margin-left: 270px;
    top: 80%;
  }

  @media (max-width: 430px) {
    margin-left: 270px;
    top: 80%;
  }
  @media (max-width: 391px) {
    margin-left: 240px;
    top: 79%;
  }

  @media (max-width: 375px) {
    margin-left: 220px;
    top: 78%;
  }

  @media (max-width: 325px) {
    margin-left: 180px;
    top: 73%;
  }
`

// 아이템 갭
const Gap = styled.div`
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
`
