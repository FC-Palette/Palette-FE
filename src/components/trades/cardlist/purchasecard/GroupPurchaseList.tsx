import { PurchaseCard } from 'components/trades/cardlist/index'
import { styled } from 'styled-components'
import { CreateBtn } from 'components/common/index'

export const GroupPurchaseList = () => {
  const groupUploadPath = '/groupUpload/1'

  return (
    <Wrapper>
      <Main>
        <CardWrapper>
          <PurchaseCard />
        </CardWrapper>
      </Main>
      <CreateBtn path={groupUploadPath} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0px 4%;
`

const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  margin-top: 20px;
  margin-bottom: 70px;
  justify-items: center;
`
