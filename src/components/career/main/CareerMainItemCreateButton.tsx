import { Button } from '@/components'
import styled from 'styled-components'
import { BrushSquare } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'

export const CareerMainItemCreateButton = ({ isProfile }) => {
  const naviage = useNavigate()
  const handleClickBtn = () => {
    isProfile ? naviage('/create/1') : naviage('/profile')
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
  top: 80%;
  z-index: 1;
  margin-left: 270px;
  transition: 0.3s;

  @media (max-width: 432px) {
    margin-left: 60%;
    top: 80%;
    transition: 0.3s;
  }

  @media (max-width: 390px) {
    margin-left: 60%;
    top: 77%;
    transition: 0.3s;
  }

  @media (max-width: 375px) {
    margin-left: 60%;
    top: 77%;
    transition: 0.3s;
  }

  @media (max-width: 325px) {
    margin-left: 55%;
    top: 70%;
    transition: 0.3s;
  }
`

// 아이템 갭
const Gap = styled.div`
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
`
