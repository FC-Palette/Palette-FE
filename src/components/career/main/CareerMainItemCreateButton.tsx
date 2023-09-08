import { Button } from '@/components'
import styled from 'styled-components'
import { BrushSquare } from 'iconsax-react'

export const CareerMainItemCreateButton = () => {
  return (
    <BtnLocationChangeDiv>
      <Button $borderRadius="24px">
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
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 1;
`
// 아이템 갭
const Gap = styled.div`
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
`
