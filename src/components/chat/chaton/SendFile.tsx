import { styled } from 'styled-components'
import { Button } from 'components/index'
import { Additem, Image } from 'iconsax-react'
import { theme, columnise } from 'styles/index'
import { useMemo } from 'react'
import { CHAT_TEXTS } from '@/constants'
export const SendFile = () => {
  const ButtonProps = useMemo(
    () => ({
      color: theme.greyScale.grey5,
      $bgColor: theme.greyScale.bluegrey,
      $borderColor: theme.greyScale.bluegrey,
      $btnHeight: '60px',
      $btnWidth: '89%'
    }),
    []
  )

  return (
    <Wrapper>
      <Button {...ButtonProps}>
        <Image />
        {CHAT_TEXTS.sendImg}
      </Button>
      <Button {...ButtonProps}>
        <Additem />
        {CHAT_TEXTS.sendFile}
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-width: 375px;
  max-width: 430px;
  width: 100%;
  height: 128px;
  ${columnise};
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 32px;
  color: ${props => props.theme.greyScale.bluegrey};
`
