import { BackgroundModal, Button, ModalButtons } from 'components/index'
import { modalOnState, agreeModalOnState } from 'recoil/index'
import { AgreeModal } from 'components/trades/detail/index'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { GroupPurchaseClosingApi, SecondHandClosingApi } from 'api/trades/index'
import {
  SECONDHAND_CLOSING_MODAL_TEXT,
  AGREE_MODAL_TEXT
} from 'constants/trades/index'
import { useState, useEffect } from 'react'

export const PurchaseFooter = ({
  isAdmin,
  isClosing,
  isSoldOut,
  offerId,
  productId
}) => {
  const [modal, setModal] = useRecoilState(modalOnState)
  const [checkModal, setCheckModal] = useRecoilState(agreeModalOnState)
  const [buttonText, setButtonText] = useState('')

  useEffect(() => {
    if (productId) {
      if (isAdmin) {
        setButtonText(isSoldOut ? '종료된 거래입니다' : '종료하기')
      } else {
        setButtonText('채팅하기')
      }
    } else if (offerId) {
      if (isAdmin) {
        setButtonText(isClosing ? '종료된 거래입니다' : '종료하기')
      } else {
        setButtonText('참여하기')
      }
    }
  }, [productId, offerId, isAdmin, isSoldOut, isClosing])

  const handleButtonClick = () => {
    if (productId) {
      if (isAdmin) {
        if (isSoldOut) {
          setModal(true)
        } else {
          setButtonText('종료하기')
        }
      } else {
        setButtonText('채팅하기')
      }
    } else if (offerId) {
      if (isAdmin) {
        if (isClosing) {
          setModal(true)
        } else {
          setButtonText('종료하기')
        }
      } else {
        setCheckModal(true)
      }
    }
  }

  const handleDeleteButton = async () => {
    if (productId) {
      await SecondHandClosingApi(productId)
      setButtonText('종료된 거래입니다')
    } else if (offerId) {
      await GroupPurchaseClosingApi(offerId)
      setButtonText('종료된 거래입니다')
    }
    setModal(false)
  }

  return (
    <>
      <FooterWrapper>
        <ButtonWrap>
          <Button
            onClick={handleButtonClick}
            $btnWidth="100%"
            $btnHeight="60px"
            $fontSize="20px"
            $borderRadius="8px"
            disabled={isClosing || isSoldOut}>
            {buttonText}
          </Button>
        </ButtonWrap>
      </FooterWrapper>

      {modal && (
        <BackgroundModal
          title={SECONDHAND_CLOSING_MODAL_TEXT[0]}
          content={SECONDHAND_CLOSING_MODAL_TEXT[1]}>
          <ModalButtons
            onLeftClick={handleDeleteButton}
            onRightClick={() => setModal(false)}
            leftBtn={SECONDHAND_CLOSING_MODAL_TEXT[2]}
            rightBtn={SECONDHAND_CLOSING_MODAL_TEXT[3]}
          />
        </BackgroundModal>
      )}
      {checkModal && (
        <AgreeModal
          title={AGREE_MODAL_TEXT[0]}
          content={AGREE_MODAL_TEXT[1]}>
          <ModalButtons
            onLeftClick={() => setCheckModal(false)}
            onRightClick={() => alert('채팅방')}
            leftBtn={AGREE_MODAL_TEXT[2]}
            rightBtn={AGREE_MODAL_TEXT[3]}
          />
        </AgreeModal>
      )}
    </>
  )
}

const FooterWrapper = styled.footer`
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

const ButtonWrap = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  width: 100%;
  margin: 0 24px;
`
