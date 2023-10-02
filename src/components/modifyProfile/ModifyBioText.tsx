import { MODIFY_PROFILE_INPUT_TEXTS } from "@/constants/modifyprofile";
import styled from "styled-components";
import { theme } from "@/styles";
import { useState } from "react";

export const ModifyBioText = () => {
  const [bio, setBio] = useState("");
  const maxCharacters = 100;

  const handleBioChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxCharacters) {
      setBio(inputText);
    }
  };

  return (
    <BioWrap>
      <label htmlFor="bio">{MODIFY_PROFILE_INPUT_TEXTS.bioText}</label>
      <textarea
        id="bio"
        name="bio"
        maxLength={maxCharacters}
        value={bio}
        onChange={handleBioChange}
      />
      <CharacterCount>
        {bio.length}/{maxCharacters} 
      </CharacterCount>
    </BioWrap>
  );
};


const BioWrap = styled.div`
  color: ${theme.greyScale.grey6};
  padding-bottom: 31px;
  font-size: 18px;
  font-weight: bold;

  label {
    display: block;
    margin-bottom: 8px;
  }

  textarea {
    width: 382px;
    height: 187.16px;
    font-size: 16px;
    padding: 8px;
    resize: none;
    padding-left: 16px;
    border-radius: 8px;
    border: 1px solid ${theme.greyScale.grey3};
    font-family: pretender;
    &:focus {
    outline: none;
    }
  }
`;
const CharacterCount = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: ${theme.greyScale.grey5};
  text-align: right;
`;
