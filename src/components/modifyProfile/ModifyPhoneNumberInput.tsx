import { MODIFY_PROFILE_INPUT_TEXTS } from "@/constants/modifyprofile";
import { theme } from "@/styles";
import { useState } from "react";
import styled from "styled-components";

export const ModifyPhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (input) => {
    const cleaned = input.replace(/\D/g, "");
    const formatted = cleaned.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    return formatted;
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setPhoneNumber(formattedValue);
  };

  return (
    <InputArea>
      <label>{MODIFY_PROFILE_INPUT_TEXTS.phonenumberText}</label>
      <input
        type="text"
        value={phoneNumber}
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


