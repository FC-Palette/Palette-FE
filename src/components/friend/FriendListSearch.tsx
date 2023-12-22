import styled from "styled-components";
import { Input } from "..";

const SearchIcon = (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.6565 14.8978H15.7303L15.402 14.5812C16.8089 12.9398 17.5359 10.7004 17.1372 8.3203C16.5862 5.06086 13.866 2.45799 10.5832 2.05936C5.62364 1.44968 1.44968 5.62364 2.05936 10.5832C2.45799 13.866 5.06086 16.5862 8.3203 17.1372C10.7004 17.5359 12.9398 16.8089 14.5812 15.402L14.8978 15.7303V16.6565L19.8808 21.6395C20.3615 22.1202 21.147 22.1202 21.6277 21.6395C22.1085 21.1588 22.1085 20.3732 21.6277 19.8925L16.6565 14.8978ZM9.62174 14.8978C6.70231 14.8978 4.34566 12.5412 4.34566 9.62174C4.34566 6.70231 6.70231 4.34566 9.62174 4.34566C12.5412 4.34566 14.8978 6.70231 14.8978 9.62174C14.8978 12.5412 12.5412 14.8978 9.62174 14.8978Z" fill="#9CA3AF"/>
      </svg>
);

export const FriendListSearch = ({ inputValue, handleInputChange }) => {
  return (
    <Wrap>
      <InputWrapper>
        <Input
          type="text"
          ph="검색어를 입력하세요."
          value={inputValue}
          onChange={handleInputChange}
        />
        {inputValue === "" && <Icon>{SearchIcon}</Icon>}
      </InputWrapper>
    </Wrap>
  );
};



const Wrap = styled.div`
  padding: 0 24px;
  
  input {
    width: 100%;
    padding: 0 40px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;


const Icon = styled.div`
  position: absolute;
  top: 53%;
  transform: translateY(-50%);
  left: 10px;
`;
