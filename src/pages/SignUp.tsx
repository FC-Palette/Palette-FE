import { Button, Header } from "@/components";
import styled from "styled-components";
import { StyledIcon } from ".";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { SIGNUP_TEXT } from "@/constants";
import { theme } from "@/styles";
import { useState } from "react";

export const SignUp = () => {
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [serviceChecked, setServiceChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  const handleAgreementChange = () => {
    const newState = !agreementChecked;
    setAgreementChecked(newState);
    setServiceChecked(newState);
    setPrivacyChecked(newState);
    setMarketingChecked(newState);
  };

  const navigate = useNavigate();
  
  return (
    <Wrap>
      <Header
        leftIcon={
          <StyledIcon onClick={() => navigate(-1)}>
            <ArrowLeft2 />
          </StyledIcon>
        }
        centerText="가입 약관"
      ></Header>
      <BodyWrap>
        <Greeting>{SIGNUP_TEXT.greetingTermsText}</Greeting>
        <Officner>{SIGNUP_TEXT.officnerText}</Officner>
        <Introduce>{SIGNUP_TEXT.introduceText}</Introduce>
        <CheckWrap>
          <Agreement>
            <label>
              <input
                type="checkbox"
                checked={agreementChecked}
                onChange={handleAgreementChange}
              />
              {SIGNUP_TEXT.agreementText}
            </label>
          </Agreement>
          <CheckItem>
            <label>
              <input
                type="checkbox"
                checked={serviceChecked}
                onChange={() => setServiceChecked(!serviceChecked)}
              />
              {SIGNUP_TEXT.serviceText}
            </label>
            <ArrowRight2 />
          </CheckItem>
          <CheckItem>
            <label>
              <input
                type="checkbox"
                checked={privacyChecked}
                onChange={() => setPrivacyChecked(!privacyChecked)}
              />
              {SIGNUP_TEXT.privacyText}
            </label>
            <ArrowRight2 />
          </CheckItem>
          <CheckItem>
            <label>
              <input
                type="checkbox"
                checked={marketingChecked}
                onChange={() => setMarketingChecked(!marketingChecked)}
              />
              {SIGNUP_TEXT.marketingText}
            </label>
            <ArrowRight2 />
          </CheckItem>
          <Button>다음</Button>
        </CheckWrap>
      </BodyWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  max-width: 430px;
`;

const BodyWrap = styled.div`
  position: relative;
  padding: 0 24px;
  height: 100vh;
`;
const Greeting = styled.div`
  padding-top: 40px;
  padding-bottom: 5px;
  font-size: 20px;
  font-weight: 600;
`;
const Officner = styled.div`
  font-size: 20px;
  padding-bottom: 30px;
  font-weight: 600;
`;
const Introduce = styled.div`
  white-space: break-spaces;
  padding-bottom: 120px;
  font-size: 14px;
  line-height: 20px;
`;

const Agreement = styled.div`
  position: relative;
  bottom: 0%;
  font-weight: 500;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  label {
    display: flex;
    align-items: center;

    input[type="checkbox"] {
      margin-right: 8px;
    }
  }
`;
const CheckItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.greyScale.grey5};
  font-size: 14px;
  font-weight: 300;
  padding-top: 12px;

  label {
    display: flex;
    align-items: center;

    input[type="checkbox"] {
      margin-right: 8px;
    }
  }
`;

const CheckWrap = styled.div`
  height: 50%;
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  Button {
    margin: 0 auto;
    margin-top: 30px;
    width: 100%;
    height: 45px;
  }
`;
