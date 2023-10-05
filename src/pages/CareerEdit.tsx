import { editRequestApi } from '@/api/career/editRequestApi'
import { Header } from '@/components'
import { EditOneCard, EditThreeCard, EditTwoCard } from '@/components/career'
import { EditFooter } from '@/components/career/edit/EditFooter'
import {
  editDtoAtom,
  editImageAtom,
  resetDtoAtom,
  resetFileAtom
} from '@/recoil'
import { CareerUseParamsProps } from '@/types'
import { ArrowLeft2 } from 'iconsax-react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import styled from 'styled-components'

export const CareerEdit = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const meetingId = location.state.meetingId
  const { editstep = '1' } = useParams<CareerUseParamsProps>()
  const [editFile, setEditFile] = useRecoilState(editImageAtom)
  const [editDto, setEditDto] = useRecoilState(editDtoAtom)
  const resetFile = useRecoilValue(resetFileAtom)
  const resetDto = useRecoilValue(resetDtoAtom)
  const submitFile = editFile.file

  const handleSubmit = async () => {
    if (editstep === '3') {
      const res = await editRequestApi(editDto, submitFile, meetingId)

      if (res.status === 200) {
        setEditDto(resetDto)
        setEditFile(resetFile)
        navigate(`/detail/${meetingId}`)
      } else {
        console.log(res)
      }
    }
  }
  const handleNextStep = async () => {
    const nextStep = parseInt(editstep) + 1
    navigate(`/edit/${nextStep}`, {
      state: { meetingId }
    })
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
            handleNextStep={handleSubmit}
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

const StyledIcon = styled.div`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};
`
