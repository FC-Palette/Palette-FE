import { MODIFY_PROFILE_INPUT_TEXTS } from "@/constants/modifyprofile";
import { theme } from "@/styles";
import styled from "styled-components";
import { ModifyProfileJobIcon } from "../common/svgicon";

export const ModifyJob = () => {

  return (
    <JobWrap>
      <label>{MODIFY_PROFILE_INPUT_TEXTS.jobText}</label>
      <JobList>
        <ModifyProfileJobIcon></ModifyProfileJobIcon>
      </JobList>
    </JobWrap>
  );
};

const JobWrap = styled.div`
  max-width: 365px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const JobList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  font-size: 16px;
  font-weight: 400;
  padding: 0;
  margin-top: 12px;
  &ModifyProfileJobIcon{
  color: black;
  background-color: ${theme.greyScale.blueGrey};
  padding: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 21px;
  }
  
`;


