import { Header } from '@/components'
import { EditOneCard, EditThreeCard, EditTwoCard } from '@/components/career'
import { EditFooter } from '@/components/career/edit/EditFooter'
import { CareerUseParamsProps } from '@/types'
import { ArrowLeft2 } from 'iconsax-react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

export const CareerEdit = () => {
  const navigate = useNavigate()
  const { editstep = '1' } = useParams<CareerUseParamsProps>()

  const handleNextStep = () => {
    if (editstep === '3') {
      alert('api 요청 로직')
    }

    const nextStep = parseInt(editstep) + 1
    navigate(`/edit/${nextStep}`)
  }

  if (editstep !== '1' && editstep !== '2' && editstep !== '3') {
    navigate('/career')
  }

  const renderContent = () => {
    switch (editstep) {
      case '1':
        return <EditOneCard />

      case '2':
        return <EditTwoCard />

      case '3':
        return <EditThreeCard />

      default:
        return <EditOneCard />
    }
  }

  const renderFooter = () => {
    let footerComponent

    switch (editstep) {
      case '1':
      case '2':
        footerComponent = (
          <EditFooter
            handleNextStep={handleNextStep}
            btnText={'다음'}
          />
        )
        break
      case '3':
        footerComponent = (
          <EditFooter
            handleNextStep={handleNextStep}
            btnText={'수정하기'}
          />
        )
        break
      default:
        footerComponent = null
    }

    return footerComponent
  }
  return (
    <Wrap>
      <Header
        leftIcon={
          <StyledIcon onClick={() => navigate(-1)}>
            <ArrowLeft2 />
          </StyledIcon>
        }
        centerText="모임수정"></Header>
      {renderContent()}
      {renderFooter()}
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;
  overflow-x: hidden;
  overflow-y: scroll;
`

const StyledIcon = styled.button`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};
`
