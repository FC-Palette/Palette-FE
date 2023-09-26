import { styled } from 'styled-components'
import { Flexbox } from 'styles/index'
import { useNavigate } from 'react-router-dom'
import { AreaTitleProps } from 'types/index'

export const AreaTitle = ({
  title,
  subitem = '',
  between = false
}: AreaTitleProps) => {
  const navigate = useNavigate()
  return (
    <Wrapper between={between}>
      <Title>{title}</Title>
      <SubInfo between={between}>{subitem}</SubInfo>
    </Wrapper>
  )
}
const Wrapper = styled(Flexbox)<{ between: boolean }>`
  padding: ${props => (props.between ? '15px 20px' : '15px 0 15px 20px')};
  justify-content: ${props => (props.between ? 'space-between' : 'flex-start')};
  align-items: ${props => (props.between ? 'center' : 'flex-end')};
  border-bottom: 1px solid ${props => props.theme.greyScale.grey1};
`
const Title = styled.div`
  color: ${props => props.theme.greyScale.grey9};
  font-weight: 700;
  font-size: 18px;
`
const SubInfo = styled.div<{ between: boolean }>`
  font-size: ${props => (props.between ? '14px' : '12px')};
  color: ${props =>
    props.between ? props.theme.main.blue0 : props.theme.greyScale.grey6};
  cursor: ${props => (props.between ? 'pointer' : '')};
  padding-left: ${props => (props.between ? '' : '8px')};
`
