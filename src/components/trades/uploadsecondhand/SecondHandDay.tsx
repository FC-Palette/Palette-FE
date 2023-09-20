import { theme } from 'styles/index'
import { css, styled } from 'styled-components'

const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일']

export const SecondHandDay = () => {
  return (
    <>
      <Wrapper>
        {daysOfWeek.map((day, index) => (
          <DayButton key={index}>{day}</DayButton>
        ))}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  height: 21px;
  font-size: ${theme.customSize.xlarge};
  margin-bottom: 8px;
  font-weight: 700;
  color: ${theme.greyScale.grey6};
  display: flex;
  width: 350px;
  justify-content: space-between;
  margin: 15px 0px;
`
const DayButton = styled.button`
  width: 42px;
  height: 42px;
  font-size: ${theme.customSize.large};
  background-color: ${theme.greyScale.blueGrey};
  color: ${theme.greyScale.grey9};
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 21px;
`
