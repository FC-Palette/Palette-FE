import { styled } from "styled-components";

export const SettingAlarmBtn = ({ id }) => {
  return (
    <Container>
      <Input id={id} defaultChecked />
      <Button htmlFor={id} className="button"></Button>
    </Container>
  );
}

const Container = styled.div`
  width: 44px;
  background-color: #fff;
  display: flex;
`;

const Button = styled.label`
  background-color: #d2d2d2;
  width: 44px;
  height: 24px;
  border-radius: 200px;
  cursor: pointer;
  position: relative;
  transition: 0.2s;

  &::before {
    position: absolute;
    content: '';
    background-color: #fff;
    width: 22px;
    height: 22px;
    border-radius: 200px;
    margin: 1px;
    transition: 0.2s;
  }
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  display: none;

  &:checked + ${Button} {
    background-color: #2563EB;
  }

  &:checked + ${Button}::before {
    transform: translateX(20px);
  }
`;
