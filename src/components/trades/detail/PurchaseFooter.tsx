import {
  UseBackgroundModal,
  UseButtons
} from 'components/common/useActions/index'
import { Button } from 'components/common/index'
import styled from 'styled-components'
import {
  GroupPurchaseClosingApi,
  SecondHandClosingApi,
  GroupParticipatingApi
} from 'api/trades/index'
import {
  SECONDHAND_CLOSING_MODAL_TEXT,
  PURCHASE_CLOSING_MODAL_TEXT,
  AGREE_MODAL_TEXT
} from 'constants/trades/index'
import { useState, useEffect } from 'react'

export const PurchaseFooter = ({
  isAdmin,
  isClosing,
  isSoldOut,
  offerId,
  productId,
  isParticipating
}) => {
  const [buttonText, setButtonText] = useState('')
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)

  const handleButtonClick = () => {
    if (productId) {
      if (isSoldOut) {
      } else if (isAdmin) {
        setModal1(true)
      } else {
      }
    } else if (offerId) {
      if (isClosing) {
      } else if (isAdmin) {
        setModal3(true)
      } else if (isParticipating) {
      } else {
        setModal2(true)
      }
    } else {
    }
  }

  const handleDeleteButton = async () => {
    if (productId) {
      await SecondHandClosingApi(productId)
      setButtonText('종료된 거래입니다')
      alert('종료되었습니다.')
    } else if (offerId) {
      await GroupPurchaseClosingApi(offerId)
      setButtonText('마감된 거래입니다')
      alert('마감되었습니다.')
    }
    setModal1(false)
  }

  const handleParticipateButton = async () => {
    try {
      await GroupParticipatingApi(offerId)
      // 성공 시 알림 메시지 표시
      alert('참여하였습니다')
      setModal2(false)
    } catch (error) {
      // 실패 시 알림 메시지 표시
      alert('참여실패하였습니다')
      setModal2(false)
    }
  }

  useEffect(() => {
    if (productId) {
      if (isSoldOut) {
        setButtonText('종료된 거래입니다')
      } else if (isAdmin) {
        setButtonText('종료하기')
      } else {
        setButtonText('채팅하기')
      }
    } else if (offerId) {
      if (isClosing) {
        setButtonText('마감된 거래입니다')
      } else if (isAdmin) {
        setButtonText('마감하기')
      } else if (isParticipating) {
        setButtonText('채팅하기')
      } else {
        setButtonText('참여하기')
      }
    } else {
      setButtonText('채팅하기')
    }
  }, [productId, offerId, isAdmin, isSoldOut, isClosing, isParticipating])
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

      {modal1 && (
        <UseBackgroundModal
          title={SECONDHAND_CLOSING_MODAL_TEXT[0]}
          content={SECONDHAND_CLOSING_MODAL_TEXT[1]}
          modalState={modal1}>
          <UseButtons
            onLeftClick={handleDeleteButton}
            onRightClick={() => setModal1(false)}
            leftBtn={SECONDHAND_CLOSING_MODAL_TEXT[2]}
            rightBtn={SECONDHAND_CLOSING_MODAL_TEXT[3]}
          />
        </UseBackgroundModal>
      )}
      {modal2 && (
        <UseBackgroundModal
          modalState={modal2}
          title={AGREE_MODAL_TEXT[0]}
          content={AGREE_MODAL_TEXT[1]}>
          <UseButtons
            onLeftClick={() => setModal2(false)}
            onRightClick={handleParticipateButton}
            leftBtn={AGREE_MODAL_TEXT[2]}
            rightBtn={AGREE_MODAL_TEXT[3]}
          />
        </UseBackgroundModal>
      )}
      {modal3 && (
        <UseBackgroundModal
          modalState={modal3}
          title={PURCHASE_CLOSING_MODAL_TEXT[0]}
          content={PURCHASE_CLOSING_MODAL_TEXT[1]}>
          <UseButtons
            onLeftClick={handleDeleteButton}
            onRightClick={() => setModal3(false)}
            leftBtn={PURCHASE_CLOSING_MODAL_TEXT[2]}
            rightBtn={PURCHASE_CLOSING_MODAL_TEXT[3]}
          />
        </UseBackgroundModal>
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
