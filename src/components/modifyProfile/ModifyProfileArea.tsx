import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // 데이트 피커 스타일 시트를 불러옵니다.
import styled from "styled-components";
import { Input } from "../common";
import { MODIFY_PROFILE_INPUT_TEXTS } from "@/constants/modifyprofile";
import { theme } from "@/styles";
import { ModifyPhoneNumberInput } from "./ModifyPhoneNumberInput";
import { ModifyBioText } from "./ModifyBioText";
import { ModifyPosition } from "./ModifyPosition";
import { ModifySex } from "./ModifySex";
import { ModifyJob } from "./ModifyJob";

export const ModifyProfileArea = () => {
  const [birthDate, setBirthDate] = useState(null);

  const handleBirthDateChange = (date) => {
    setBirthDate(date);
  };

  return (
    <Wrap>
      <InputArea>
        {MODIFY_PROFILE_INPUT_TEXTS.emailText}
        <Input ph={"user email"} disabled />
      </InputArea>
      <InputArea>
        {MODIFY_PROFILE_INPUT_TEXTS.nicknameText}
        <Input />
      </InputArea>
      <InputArea>
        <ModifyPhoneNumberInput />
      </InputArea>
      <InputArea>
        {MODIFY_PROFILE_INPUT_TEXTS.birthText}
        <DatePicker
          selected={birthDate}
          onChange={handleBirthDateChange}
          dateFormat="yyyy-MM-dd" 
          isClearable
          placeholderText="날짜 선택" 
        />
      </InputArea>
      <ModifyBioText />
      <InputArea>
        {MODIFY_PROFILE_INPUT_TEXTS.sexText}
        <ModifySex />
      </InputArea>
      <InputArea>
        <ModifyPosition />
      </InputArea>
      <InputArea>
        <ModifyJob></ModifyJob>
      </InputArea>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 300px;
  padding: 0 24px;
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

const InputArea = styled.div`
  color: ${theme.greyScale.grey6};
  padding-bottom: 31px;
  font-size: 18px;
  font-weight: bold;
  Input {
    width: 382px;
    height: 48px;
    padding: 0;
    padding-left: 16px;
    margin-top: 8px;
  }
`;
