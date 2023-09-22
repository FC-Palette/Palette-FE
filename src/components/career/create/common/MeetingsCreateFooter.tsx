import { Button } from '@/components'
import styled from 'styled-components'

export const MeetingsCreateFooter = ({ handleNextStep }) => {
  return (
    <Wrapper>
      <BtnWrap>
        <Button
          onClick={() => handleNextStep()}
          $btnWidth="100%"
          $btnHeight="60px"
          $fontSize="20px"
          $borderRadius="8px">
          다음
        </Button>
      </BtnWrap>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  position: sticky;
  height: 80px;
  z-index: 10;
  bottom: 0;
  background-color: transparent;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.2);
  margin-top: 10%;
`

const BtnWrap = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  width: 100%;
  margin: 10% 5.5%;
`
