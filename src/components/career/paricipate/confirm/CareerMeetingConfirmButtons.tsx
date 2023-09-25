import { Button } from 'components/index'
import { theme } from 'styles/index'
import { styled } from 'styled-components'

interface BtnsProps {
  leftBtn: string
  rightBtn: string
}
export const CareerMeetingConfirmButtons = ({
  leftBtn,
  rightBtn
}: BtnsProps) => {
  return (
    <>
      <Wrapper>
        <BtnWrap>
          <Button
            color={theme.main.blue0}
            $bgColor={theme.main.white}
            $borderColor={theme.main.blue0}
            $btnWidth="50%"
            $btnHeight="48px"
            $fontSize="16px">
            {leftBtn}
          </Button>

          <Button
            $bgColor={theme.main.blue0}
            $btnWidth="50%"
            $btnHeight="48px"
            $fontSize="16px">
            {rightBtn}
          </Button>
        </BtnWrap>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.footer`
  display: flex;
  position: absolute;
  width: 100%;
  max-width: 430px;
  min-height: 70px;
  z-index: 100;
  bottom: 0;
  background-color: ${props => props.theme.main.white};
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.2);
`

const BtnWrap = styled.div`
  margin: 0 24px;
  gap: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  width: 100%;
`
