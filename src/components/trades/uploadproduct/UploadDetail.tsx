import { styled } from 'styled-components'
import { UploadList } from 'components/trades/uploadproduct/index'

export const UploadDetail = () => {
  return (
    <Wrapper>
      <UploadList></UploadList>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
`
