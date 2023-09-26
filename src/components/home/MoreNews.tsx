import { styled } from 'styled-components'
import { ArrowRight2 } from 'iconsax-react'
import { HOME_TEXTS } from 'constants/index'
import { Flexbox } from 'styles/index'
import { StyledIcon } from 'pages/index'
export const MoreNews = () => {
  return (
    <Wrapper>
      <Text>{HOME_TEXTS.more}</Text>
      <StyledIcon>
        <ArrowRight2 size="16" />
      </StyledIcon>
    </Wrapper>
  )
}

const Wrapper = styled(Flexbox)`
  padding: 9px 3px;
  height: 35px;
  align-items: center;
  font-size: 14px;
`
const Text = styled.div`
  padding-bottom: 1px;
`
