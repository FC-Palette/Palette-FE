import { Button } from '@/components'

import styled from 'styled-components'

export const GetDetailFooterAndButtonHost = () => {
  const isClosed = true

  return (
    <>
      <Wrapper>
        <BtnWrap>
          <Button
            $btnWidth="100%"
            $btnHeight="60px"
            $fontSize="20px"
            $borderRadius="8px">
            {isClosed ? '다시 모집하기' : '모집 마감하기'}
          </Button>
        </BtnWrap>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  position: sticky;
  width: 100%;
  max-width: 430px;
  min-height: 80px;
  z-index: 100;
  bottom: 0;
  background-color: ${props => props.theme.main.white};
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.2);
`

const BtnWrap = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  width: 100%;
  margin: 0 24px;
`

const IsUserNotJoined = styled.div`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 80px;
  width: 100%;
  height: 32px;
  font-size: 16px;
  border-radius: 4px;
  background-color: ${props => props.theme.greyScale.grey7};
  color: ${props => props.theme.main.white};
`
