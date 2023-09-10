import { Button } from '@/components'
import styled from 'styled-components'
import { BrushSquare } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'

export const CareerMainItemCreateButton = () => {
  const naviage = useNavigate()
  const handleClickBtn = () => {
    naviage('/profile-1')
  }
  return (
    <BtnLocationChangeDiv>
      <Button
        $borderRadius="24px"
        onClick={handleClickBtn}>
        <Gap>
          {<BrushSquare />}
          글쓰기
        </Gap>
      </Button>
    </BtnLocationChangeDiv>
  )
}

// 버튼 위치 조절 스타일러
const BtnLocationChangeDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  position: sticky;
  bottom: 100px;
  margin-right: 20px;
  z-index: 1;
`
// 아이템 갭
const Gap = styled.div`
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
`
