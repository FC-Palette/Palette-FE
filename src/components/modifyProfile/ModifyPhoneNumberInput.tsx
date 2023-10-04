import { MODIFY_PROFILE_INPUT_TEXTS } from "@/constants/modifyprofile";
import { theme } from "@/styles";
import styled from "styled-components";

export const ModifyPhoneNumberInput = ({ formData, setFormData }) => {


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // 하이픈 제거
    const cleanedValue = value.replace(/-/g, "");
    // 최대 길이를 11자로 제한
    const formattedValue = cleanedValue.slice(0, 11);
    setFormData({
      ...formData,
      [name]: formattedValue
    });
  };

  return (
    <InputArea>
      <label>{MODIFY_PROFILE_INPUT_TEXTS.phonenumberText}</label>
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        placeholder="010-0000-0000"
        maxLength={11}
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


