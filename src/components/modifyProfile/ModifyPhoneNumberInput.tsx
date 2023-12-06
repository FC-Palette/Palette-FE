import { MODIFY_PROFILE_INPUT_TEXTS } from "@/constants/modifyprofile";
import { theme } from "@/styles";
import styled from "styled-components";

export const ModifyPhoneNumberInput = ({ formData, setFormData }) => {
  const handleInputChange = (event) => {
    console.log(event.target)
    
    const { name, value } = event.target;
    const formattedValue = value.replace(/\D/g, '').replace(/^(\d{3})(\d{0,4})/, '010$2').slice(0, 11);
    // 하이픈을 제거한 값으로 저장, 앞자리 010 고정, 숫자만가능.

    setFormData({
      ...formData,
      [name]: formattedValue, 
      // 하이픈 없는 상태로 저장
    });
  };

  const renderHyphenNumber = formData.phoneNumber 
  ? formData.phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3') 
  : ''
  // 하이픈 있는 상태로 렌더링

  return (
    <InputArea>
      <label>{MODIFY_PROFILE_INPUT_TEXTS.phonenumberText}</label>
      <input
        type="text"
        name="phoneNumber"
        value={renderHyphenNumber}
        onChange={handleInputChange}
        placeholder="010-0000-0000"
        maxLength={13}
      />
    </InputArea>
  );
};



const InputArea = styled.div`
    Input{
    width: 382px;
    height: 48px;
    padding: 0;
    padding-left: 16px;
    border-radius: 8px;
    border: 1px solid ${theme.greyScale.grey3};
    margin-top: 8px;
    &:focus {
    outline: none;
    }
  }
`;


