import { theme } from '@/styles';
import { useEffect, useState } from 'react';
import styled from 'styled-components';


export const ModifyProfileJobIcon = ({ formData, setFormData }) => {
  const [selectedJob, setSelectedJob] = useState(formData.job);

  const handleJobClick = (job) => {
    if (selectedJob === job) {
      setSelectedJob(null);
      setFormData({
        ...formData,
        job: null,
      });
    } else {
      setSelectedJob(job);
      setFormData({
        ...formData,
        job,
      });
    }
  };

  useEffect(() => {
  }, [selectedJob]);


  return (
    <JobWrap>
        <Job
        onClick={() => handleJobClick("경영・비즈니스")}
        clicked={selectedJob === "경영・비즈니스"}
      >
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.9459 10.033L14.6792 13.3663C14.5792 14.3863 14.4992 15.1663 12.6925 15.1663H4.30586C2.49919 15.1663 2.41919 14.3863 2.31919 13.3663L2.05253 10.033C1.99919 9.47967 2.17253 8.96634 2.48586 8.57301C2.49253 8.56634 2.49253 8.56634 2.49919 8.55967C2.86586 8.11301 3.41919 7.83301 4.03919 7.83301H12.9592C13.5792 7.83301 14.1259 8.11301 14.4859 8.54634C14.4925 8.55301 14.4992 8.55967 14.4992 8.56634C14.8259 8.95967 15.0059 9.47301 14.9459 10.033Z" stroke={selectedJob === "경영・비즈니스" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10"/>
        <path d="M2.83203 8.12018V4.68685C2.83203 2.42018 3.3987 1.85352 5.66536 1.85352H6.51203C7.3587 1.85352 7.55203 2.10685 7.87203 2.53352L8.7187 3.66685C8.93203 3.94685 9.0587 4.12018 9.62536 4.12018H11.3254C13.592 4.12018 14.1587 4.68685 14.1587 6.95352V8.14685" stroke={selectedJob === "경영・비즈니스" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.78516 11.833H10.2118" stroke={selectedJob === "경영・비즈니스" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <StyledSpan spanColor={selectedJob === "경영・비즈니스" ? "#2563EB" : ""}>
        경영・비즈니스
        </StyledSpan>
      </Job>

      <Job
        onClick={() => handleJobClick("고객・영업")}
        clicked={selectedJob === "고객・영업" }
      >
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.13896 9.65291C9.17357 9.65291 10.0123 8.8142 10.0123 7.77958C10.0123 6.74497 9.17357 5.90625 8.13896 5.90625C7.10434 5.90625 6.26562 6.74497 6.26562 7.77958C6.26562 8.8142 7.10434 9.65291 8.13896 9.65291Z" stroke={selectedJob === "고객・영업" ? "#2563EB" : "#FF706F"}  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.5997 13.9665C11.5997 12.4132 10.053 11.1465 8.13969 11.1465C6.22635 11.1465 4.67969 12.4065 4.67969 13.9665"             stroke={selectedJob === "고객・영업" ? "#2563EB" : "#FF706F"}  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.4987 8.83333C14.4987 12.3333 11.6654 15.1667 8.16536 15.1667C4.66536 15.1667 1.83203 12.3333 1.83203 8.83333C1.83203 5.33333 4.66536 2.5 8.16536 2.5C9.0387 2.5 9.87203 2.67333 10.632 2.99333C10.5454 3.25999 10.4987 3.54 10.4987 3.83333C10.4987 4.33333 10.6387 4.80667 10.8854 5.20667C11.0187 5.43333 11.192 5.63998 11.392 5.81331C11.8587 6.23998 12.4787 6.5 13.1654 6.5C13.4587 6.5 13.7387 6.45332 13.9987 6.35999C14.3187 7.11999 14.4987 7.96 14.4987 8.83333Z"             stroke={selectedJob === "고객・영업" ? "#2563EB" : "#FF706F"}  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.8333 3.83366C15.8333 4.04699 15.8067 4.25365 15.7533 4.45365C15.6933 4.72032 15.5867 4.98032 15.4467 5.20699C15.1267 5.74699 14.6133 6.16698 14 6.36031C13.74 6.45364 13.46 6.50033 13.1667 6.50033C12.48 6.50033 11.86 6.24031 11.3933 5.81364C11.1933 5.64031 11.02 5.43366 10.8867 5.20699C10.64 4.80699 10.5 4.33366 10.5 3.83366C10.5 3.54033 10.5467 3.26032 10.6333 2.99365C10.76 2.60699 10.9733 2.26034 11.2533 1.97367C11.74 1.47367 12.42 1.16699 13.1667 1.16699C13.9533 1.16699 14.6667 1.507 15.1467 2.05367C15.5733 2.527 15.8333 3.15366 15.8333 3.83366Z" stroke={selectedJob === "고객・영업" ? "#2563EB" : "#FF706F"}  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.1585 3.82031H12.1719" stroke={selectedJob === "고객・영업" ? "#2563EB" : "#FF706F"}  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.1641 2.84668V4.84001" stroke={selectedJob === "고객・영업" ? "#2563EB" : "#FF706F"}  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <StyledSpan spanColor={selectedJob === "고객・영업" ? "#2563EB" : ""}>
          고객・영업
        </StyledSpan>
      </Job>

      <Job
        onClick={() => handleJobClick("개발")}
        clicked={selectedJob === "개발" }
        >
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.16536 13.1468H5.83203C3.16536 13.1468 1.83203 12.4801 1.83203 9.14681V5.81348C1.83203 3.14681 3.16536 1.81348 5.83203 1.81348H11.1654C13.832 1.81348 15.1654 3.14681 15.1654 5.81348V9.14681C15.1654 11.8135 13.832 13.1468 11.1654 13.1468H10.832C10.6254 13.1468 10.4254 13.2468 10.2987 13.4135L9.29871 14.7468C8.85871 15.3335 8.13869 15.3335 7.69869 14.7468L6.69869 13.4135C6.59202 13.2668 6.35203 13.1468 6.16536 13.1468Z" stroke={selectedJob === "개발" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.83333 6.2998L4.5 7.63314L5.83333 8.96647" stroke={selectedJob === "개발" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.166 6.2998L12.4993 7.63314L11.166 8.96647" stroke={selectedJob === "개발" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.16536 6.08008L7.83203 9.18677" stroke={selectedJob === "개발" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <StyledSpan spanColor={selectedJob === "개발" ? "#2563EB" : ""}>
        개발
                </StyledSpan>
      </Job>


      <Job
        onClick={() => handleJobClick("게임기획・개발")}
        clicked={selectedJob === "게임기획・개발" }
        >
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.88099 8.80664L4.84766 10.84" stroke={selectedJob === "게임기획・개발" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.86719 8.82715L6.90052 10.8605" stroke={selectedJob === "게임기획・개발" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.51953 9.83301H9.5262" stroke={selectedJob === "게임기획・개발" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.1484 9.83301H12.1551" stroke={selectedJob === "게임기획・개발" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.832 11.153V11.1396" stroke={selectedJob === "게임기획・개발" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.832 8.52701V8.51367" stroke={selectedJob === "게임기획・개발" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.4987 15.1667H10.4987C13.832 15.1667 15.1654 13.8333 15.1654 10.5V9.16667C15.1654 5.83333 13.832 4.5 10.4987 4.5H6.4987C3.16536 4.5 1.83203 5.83333 1.83203 9.16667V10.5C1.83203 13.8333 3.16536 15.1667 6.4987 15.1667Z" stroke={selectedJob === "게임기획・개발" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.17365 1.83301L9.16698 2.50634C9.16031 2.87301 8.86698 3.16634 8.50031 3.16634H8.48031C8.11365 3.16634 7.82031 3.46634 7.82031 3.83301C7.82031 4.19967 8.12031 4.49967 8.48698 4.49967H9.15365" stroke={selectedJob === "게임기획・개발" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <StyledSpan spanColor={selectedJob === "게임기획・개발" ? "#2563EB" : ""}>
        게임기획・개발
        </StyledSpan>
      </Job>

      <Job
        onClick={() => handleJobClick("금융・컨설팅・VC")}
        clicked={selectedJob === "금융・컨설팅・VC" }
        >
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3673 5.77999V9.21334C13.3673 11.2667 12.194 12.1466 10.434 12.1466H4.57395C4.27395 12.1466 3.98729 12.12 3.72062 12.06C3.55395 12.0334 3.39396 11.9867 3.24729 11.9333C2.24729 11.56 1.64062 10.6933 1.64062 9.21334V5.77999C1.64062 3.72666 2.81395 2.84668 4.57395 2.84668H10.434C11.9273 2.84668 13.0006 3.48001 13.2873 4.92668C13.334 5.19334 13.3673 5.46666 13.3673 5.77999Z" stroke={selectedJob === "금융・컨설팅・VC" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.3693 7.78007V11.2134C15.3693 13.2668 14.196 14.1467 12.436 14.1467H6.57599C6.08266 14.1467 5.636 14.0801 5.24933 13.9334C4.456 13.6401 3.91599 13.0334 3.72266 12.0601C3.98932 12.1201 4.27599 12.1467 4.57599 12.1467H10.436C12.196 12.1467 13.3693 11.2668 13.3693 9.21342V5.78007C13.3693 5.46674 13.3427 5.18676 13.2893 4.92676C14.556 5.19342 15.3693 6.08674 15.3693 7.78007Z" stroke={selectedJob === "금융・컨설팅・VC" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.49829 9.26025C8.47031 9.26025 9.2583 8.47227 9.2583 7.50024C9.2583 6.52822 8.47031 5.74023 7.49829 5.74023C6.52627 5.74023 5.73828 6.52822 5.73828 7.50024C5.73828 8.47227 6.52627 9.26025 7.49829 9.26025Z" stroke={selectedJob === "금융・컨설팅・VC" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.6875 6.0332V8.96655" stroke={selectedJob === "금융・컨설팅・VC" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.3164 6.0332V8.96655" stroke={selectedJob === "금융・컨설팅・VC" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <StyledSpan spanColor={selectedJob === "금융・컨설팅・VC" ? "#2563EB" : ""}>
        금융・컨설팅・VC
        </StyledSpan>
      </Job>


      <Job
        onClick={() => handleJobClick("교육")}
        clicked={selectedJob === "교육" }
        > 
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.83203 1.83301H6.4987C3.16536 1.83301 1.83203 3.16634 1.83203 6.49967V10.4997C1.83203 13.833 3.16536 15.1663 6.4987 15.1663H10.4987C13.832 15.1663 15.1654 13.833 15.1654 10.4997V9.16634" stroke={selectedJob === "교육" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.1933 2.5135L5.93992 7.76684C5.73992 7.96684 5.53992 8.36017 5.49992 8.64684L5.21325 10.6535C5.10659 11.3802 5.61992 11.8868 6.34659 11.7868L8.35325 11.5002C8.63325 11.4602 9.02659 11.2602 9.23325 11.0602L14.4866 5.80684C15.3933 4.90017 15.8199 3.84684 14.4866 2.5135C13.1533 1.18017 12.0999 1.60684 11.1933 2.5135Z" stroke={selectedJob === "교육" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.4414 3.2666C10.8881 4.85993 12.1347 6.1066 13.7347 6.55993" stroke={selectedJob === "교육" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <StyledSpan spanColor={selectedJob === "교육" ? "#2563EB" : ""}>
        교육
        </StyledSpan>
      </Job>

    <Job
      onClick={() => handleJobClick("데이터・AI・ML")}
      clicked={selectedJob === "데이터・AI・ML" }
      >
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.8333 9.83366C14.5697 9.83366 15.1667 9.23671 15.1667 8.50033C15.1667 7.76395 14.5697 7.16699 13.8333 7.16699C13.097 7.16699 12.5 7.76395 12.5 8.50033C12.5 9.23671 13.097 9.83366 13.8333 9.83366Z" stroke={selectedJob === "데이터・AI・ML" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.8333 4.49967C14.5697 4.49967 15.1667 3.90272 15.1667 3.16634C15.1667 2.42996 14.5697 1.83301 13.8333 1.83301C13.097 1.83301 12.5 2.42996 12.5 3.16634C12.5 3.90272 13.097 4.49967 13.8333 4.49967Z" stroke={selectedJob === "데이터・AI・ML" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.8333 15.1667C14.5697 15.1667 15.1667 14.5697 15.1667 13.8333C15.1667 13.097 14.5697 12.5 13.8333 12.5C13.097 12.5 12.5 13.097 12.5 13.8333C12.5 14.5697 13.097 15.1667 13.8333 15.1667Z" stroke={selectedJob === "데이터・AI・ML" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.16536 9.83366C3.90174 9.83366 4.4987 9.23671 4.4987 8.50033C4.4987 7.76395 3.90174 7.16699 3.16536 7.16699C2.42898 7.16699 1.83203 7.76395 1.83203 8.50033C1.83203 9.23671 2.42898 9.83366 3.16536 9.83366Z" stroke={selectedJob === "데이터・AI・ML" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4.5 8.5H12.5" stroke={selectedJob === "데이터・AI・ML" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.4987 3.16699H9.83203C8.4987 3.16699 7.83203 3.83366 7.83203 5.16699V11.8337C7.83203 13.167 8.4987 13.8337 9.83203 13.8337H12.4987" stroke={selectedJob === "데이터・AI・ML" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <StyledSpan spanColor={selectedJob === "데이터・AI・ML" ? "#2563EB" : ""}>
      데이터・AI・ML
      </StyledSpan>
    </Job>  



    <Job
      onClick={() => handleJobClick('디자인')}
      clicked={selectedJob === '디자인' }
      >
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.0397 3.12658C14.013 5.68658 11.4397 9.16658 9.28635 10.8933L7.97302 11.9466C7.80635 12.0666 7.63969 12.1733 7.45302 12.2466C7.45302 12.1266 7.44635 11.9933 7.42635 11.8666C7.35302 11.3066 7.09969 10.7866 6.65302 10.3399C6.19969 9.88658 5.64635 9.61992 5.07969 9.54658C4.94635 9.53992 4.81302 9.52658 4.67969 9.53992C4.75302 9.33325 4.86635 9.13992 5.00635 8.97992L6.04635 7.66658C7.76635 5.51325 11.2597 2.92658 13.813 1.90658C14.2064 1.75992 14.5864 1.86658 14.8264 2.11325C15.0797 2.35992 15.1997 2.73992 15.0397 3.12658Z" stroke={selectedJob === "디자인" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.45417 12.2465C7.45417 12.9799 7.17417 13.6799 6.6475 14.2132C6.24083 14.6199 5.6875 14.8999 5.0275 14.9865L3.3875 15.1665C2.49417 15.2665 1.7275 14.5065 1.83417 13.5999L2.01417 11.9599C2.17417 10.4999 3.39417 9.56654 4.6875 9.53987C4.82083 9.5332 4.96083 9.53987 5.0875 9.54654C5.65417 9.61987 6.2075 9.87987 6.66083 10.3399C7.1075 10.7865 7.36083 11.3065 7.43417 11.8665C7.44083 11.9932 7.45417 12.1199 7.45417 12.2465Z" stroke={selectedJob === "디자인" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.99318 10.1465C9.99318 8.4065 8.57984 6.99316 6.83984 6.99316" stroke={selectedJob === "디자인" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <StyledSpan spanColor={selectedJob === '디자인' ? "#2563EB" : ""}>
      디자인
      </StyledSpan>
    </Job>



    <Job
      onClick={() => handleJobClick("마케팅・광고・홍보")}
      clicked={selectedJob === "마케팅・광고・홍보" }
      >
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.43219 11.833H12.5589C13.8255 11.833 14.4922 11.1663 14.4922 9.89968V1.83301H2.49219V9.89968C2.49885 11.1663 3.16552 11.833 4.43219 11.833Z" stroke={selectedJob === "마케팅・광고・홍보" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1.83203 1.83301H15.1654" stroke={selectedJob === "마케팅・광고・홍보" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.83203 15.1663L8.4987 13.833V11.833" stroke={selectedJob === "마케팅・광고・홍보" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.1667 15.1663L8.5 13.833" stroke={selectedJob === "마케팅・광고・홍보" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.5 7.83301L7.6 6.07967C7.76666 5.93967 7.98666 5.97967 8.1 6.16634L8.9 7.49967C9.01334 7.68634 9.23334 7.71968 9.4 7.58634L11.5 5.83301" stroke={selectedJob === "마케팅・광고・홍보" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <StyledSpan spanColor={selectedJob === "마케팅・광고・홍보" ? "#2563EB" : ""}>
      마케팅・광고・홍보
      </StyledSpan>
    </Job>


    <Job
      onClick={() => handleJobClick("미디어・커뮤니케이션")}
      clicked={selectedJob === "미디어・커뮤니케이션" }
      >
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.85203 14.1134H4.6387C2.53203 14.1134 1.83203 12.7134 1.83203 11.3067V5.69339C1.83203 3.58672 2.53203 2.88672 4.6387 2.88672H8.85203C10.9587 2.88672 11.6587 3.58672 11.6587 5.69339V11.3067C11.6587 13.4134 10.952 14.1134 8.85203 14.1134Z" stroke={selectedJob === "미디어・커뮤니케이션" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.5135 11.9001L11.6602 10.6001V6.39342L13.5135 5.09342C14.4202 4.46009 15.1668 4.84675 15.1668 5.96009V11.0401C15.1668 12.1534 14.4202 12.5401 13.5135 11.9001Z" stroke={selectedJob === "미디어・커뮤니케이션" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.16797 7.83301C8.72025 7.83301 9.16797 7.38529 9.16797 6.83301C9.16797 6.28072 8.72025 5.83301 8.16797 5.83301C7.61568 5.83301 7.16797 6.28072 7.16797 6.83301C7.16797 7.38529 7.61568 7.83301 8.16797 7.83301Z" stroke={selectedJob === "미디어・커뮤니케이션" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <StyledSpan spanColor={selectedJob === "미디어・커뮤니케이션" ? "#2563EB" : ""}>
      미디어・커뮤니케이션
      </StyledSpan>
    </Job>


    <Job
      onClick={() => handleJobClick("물류・구매")}
      clicked={selectedJob === "물류・구매" }
      >
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4987 1.83301V8.49967C10.4987 9.23301 9.8987 9.83301 9.16536 9.83301H1.83203V4.49967C1.83203 3.02634 3.02536 1.83301 4.4987 1.83301H10.4987Z" stroke={selectedJob === "물류・구매" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15.1654 9.83301V11.833C15.1654 12.9397 14.272 13.833 13.1654 13.833H12.4987C12.4987 13.0997 11.8987 12.4997 11.1654 12.4997C10.432 12.4997 9.83203 13.0997 9.83203 13.833H7.16536C7.16536 13.0997 6.56536 12.4997 5.83203 12.4997C5.0987 12.4997 4.4987 13.0997 4.4987 13.833H3.83203C2.72536 13.833 1.83203 12.9397 1.83203 11.833V9.83301H9.16536C9.8987 9.83301 10.4987 9.23301 10.4987 8.49967V3.83301H11.7254C12.2054 3.83301 12.6454 4.09301 12.8854 4.50635L14.0254 6.49967H13.1654C12.7987 6.49967 12.4987 6.79967 12.4987 7.16634V9.16634C12.4987 9.53301 12.7987 9.83301 13.1654 9.83301H15.1654Z" stroke={selectedJob === "물류・구매" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.83333 15.1667C6.56971 15.1667 7.16667 14.5697 7.16667 13.8333C7.16667 13.097 6.56971 12.5 5.83333 12.5C5.09695 12.5 4.5 13.097 4.5 13.8333C4.5 14.5697 5.09695 15.1667 5.83333 15.1667Z" stroke={selectedJob === "물류・구매" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.1654 15.1667C11.9017 15.1667 12.4987 14.5697 12.4987 13.8333C12.4987 13.097 11.9017 12.5 11.1654 12.5C10.429 12.5 9.83203 13.097 9.83203 13.8333C9.83203 14.5697 10.429 15.1667 11.1654 15.1667Z" stroke={selectedJob === "물류・구매" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15.1667 8.5V9.83333H13.1667C12.8 9.83333 12.5 9.53333 12.5 9.16667V7.16667C12.5 6.8 12.8 6.5 13.1667 6.5H14.0267L15.1667 8.5Z" stroke={selectedJob === "물류・구매" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <StyledSpan spanColor={selectedJob === "물류・구매" ? "#2563EB" : ""}>
      물류・구매
      </StyledSpan>
    </Job>

    <Job
      onClick={() => handleJobClick("서비스기획・운영")}
      clicked={selectedJob === "서비스기획・운영"}
      >
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.83203 11.5003V5.50033C3.83203 5.08699 3.84536 4.72033 3.89203 4.39366C4.08536 2.64033 4.91203 2.16699 7.16536 2.16699H9.83203C12.0854 2.16699 12.912 2.64033 13.1054 4.39366C13.152 4.72033 13.1654 5.08699 13.1654 5.50033V11.5003C13.1654 11.9137 13.152 12.2803 13.1054 12.607C12.912 14.3603 12.0854 14.8337 9.83203 14.8337H7.16536C4.91203 14.8337 4.08536 14.3603 3.89203 12.607C3.84536 12.2803 3.83203 11.9137 3.83203 11.5003Z" stroke={selectedJob === "서비스기획・운영" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1.83203 13.5V3.5" stroke={selectedJob === "서비스기획・운영" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15.168 13.167V3.16699" stroke={selectedJob === "서비스기획・운영" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <StyledSpan spanColor={selectedJob === "서비스기획・운영" ? "#2563EB" : ""}>
      서비스기획・운영
      </StyledSpan>
    </Job>




    <Job
      onClick={() => handleJobClick("이커머스・리테일")}
      clicked={selectedJob === "이커머스・리테일" }
      >
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.50781 7.98047V10.9738C2.50781 13.9671 3.70781 15.1671 6.70115 15.1671H10.2945C13.2878 15.1671 14.4878 13.9671 14.4878 10.9738V7.98047" stroke={selectedJob === "이커머스・리테일" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.49902 8.49967C9.71902 8.49967 10.619 7.50634 10.499 6.28634L10.059 1.83301H6.94568L6.49902 6.28634C6.37902 7.50634 7.27902 8.49967 8.49902 8.49967Z" stroke={selectedJob === "이커머스・리테일" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.7085 8.49967C14.0552 8.49967 15.0418 7.40634 14.9085 6.06634L14.7218 4.23301C14.4818 2.49967 13.8152 1.83301 12.0685 1.83301H10.0352L10.5018 6.50634C10.6152 7.60634 11.6085 8.49967 12.7085 8.49967Z" stroke={selectedJob === "이커머스・리테일" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4.25895 8.49967C5.35894 8.49967 6.35228 7.60634 6.45894 6.50634L6.60561 5.03301L6.92561 1.83301H4.89228C3.14561 1.83301 2.47895 2.49967 2.23895 4.23301L2.05895 6.06634C1.92561 7.40634 2.91228 8.49967 4.25895 8.49967Z" stroke={selectedJob === "이커머스・리테일" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.4987 11.833C7.38536 11.833 6.83203 12.3863 6.83203 13.4997V15.1663H10.1654V13.4997C10.1654 12.3863 9.61203 11.833 8.4987 11.833Z" stroke={selectedJob === "이커머스・리테일" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <StyledSpan spanColor={selectedJob === "이커머스・리테일" ? "#2563EB" : ""}>
      이커머스・리테일
      </StyledSpan>
    </Job>



    <Job
      onClick={() => handleJobClick("인사・채용・노무")}
      clicked={selectedJob === "인사・채용・노무" }
      >
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.60573 7.74634C6.53906 7.73967 6.45906 7.73967 6.38573 7.74634C4.79906 7.69301 3.53906 6.39301 3.53906 4.79301C3.53906 3.15967 4.85906 1.83301 6.49906 1.83301C8.1324 1.83301 9.45906 3.15967 9.45906 4.79301C9.45239 6.39301 8.1924 7.69301 6.60573 7.74634Z" stroke={selectedJob === "인사・채용・노무" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.4382 3.16699C12.7316 3.16699 13.7716 4.21366 13.7716 5.50033C13.7716 6.76033 12.7716 7.78699 11.5249 7.83366C11.4716 7.82699 11.4116 7.82699 11.3516 7.83366" stroke={selectedJob === "인사・채용・노무" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.2725 10.207C1.65917 11.287 1.65917 13.047 3.2725 14.1203C5.10583 15.347 8.1125 15.347 9.94583 14.1203C11.5592 13.0403 11.5592 11.2803 9.94583 10.207C8.11917 8.98699 5.1125 8.98699 3.2725 10.207Z" stroke={selectedJob === "인사・채용・노무" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.7266 13.833C13.2066 13.733 13.6599 13.5397 14.0332 13.253C15.0732 12.473 15.0732 11.1863 14.0332 10.4063C13.6666 10.1263 13.2199 9.93967 12.7466 9.83301" stroke={selectedJob === "인사・채용・노무" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <StyledSpan spanColor={selectedJob === "인사・채용・노무" ? "#2563EB" : ""}>
      인사・채용・노무
      </StyledSpan>
    </Job>


    <Job
      onClick={() => handleJobClick("의류・제약・바이오")}
      clicked={selectedJob === "의류・제약・바이오" }
      >
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.47917 15.1663H10.4792C13.8125 15.1663 15.1458 13.833 15.1458 10.4997V6.49967C15.1458 3.16634 13.8125 1.83301 10.4792 1.83301H6.47917C3.14583 1.83301 1.8125 3.16634 1.8125 6.49967V10.4997C1.8125 13.833 3.14583 15.1663 6.47917 15.1663Z" stroke={selectedJob === "의류・제약・바이오" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1.8125 8.96706L5.8125 8.95373C6.3125 8.95373 6.8725 9.33373 7.05917 9.8004L7.81917 11.7204C7.9925 12.1537 8.26583 12.1537 8.43917 11.7204L9.96583 7.84706C10.1125 7.47373 10.3858 7.4604 10.5725 7.81373L11.2658 9.12706C11.4725 9.5204 12.0058 9.8404 12.4458 9.8404H15.1525" stroke={selectedJob === "의류・제약・바이오" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <StyledSpan spanColor={selectedJob === "의류・제약・바이오" ? "#2563EB" : ""}>
      의류・제약・바이오
      </StyledSpan>
    </Job>



    <Job
      onClick={() => handleJobClick("회계・재무")}
      clicked={selectedJob === "회계・재무" }
      >
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 5.16634V11.833C14.5 13.833 13.5 15.1663 11.1667 15.1663H5.83333C3.5 15.1663 2.5 13.833 2.5 11.833V5.16634C2.5 3.16634 3.5 1.83301 5.83333 1.83301H11.1667C13.5 1.83301 14.5 3.16634 14.5 5.16634Z" stroke={selectedJob === "회계・재무" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.3333 7.83301H5.66667C5.02667 7.83301 4.5 7.30634 4.5 6.66634V4.99967C4.5 4.35967 5.02667 3.83301 5.66667 3.83301H11.3333C11.9733 3.83301 12.5 4.35967 12.5 4.99967V6.66634C12.5 7.30634 11.9733 7.83301 11.3333 7.83301Z" stroke={selectedJob === "회계・재무" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.36536 10.6865L5.83203 12.2198" stroke={selectedJob === "회계・재무" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.85156 10.707L7.38489 12.2404" stroke={selectedJob === "회계・재무" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.4922 10.7197H11.5055" stroke={selectedJob === "회계・재무" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.1602 12.1667V12.1533" stroke={selectedJob === "회계・재무" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <StyledSpan spanColor={selectedJob === "회계・재무" ? "#2563EB" : ""}>
      회계・재무
      </StyledSpan>
    </Job>


    <Job
      onClick={() => handleJobClick("연구・R&D")}
      clicked={selectedJob === "연구・R&D" }
      >
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.1667 6.16634C15.1667 8.55967 13.2267 10.4997 10.8333 10.4997C10.72 10.4997 10.6 10.493 10.4867 10.4863C10.32 8.37302 8.62666 6.67967 6.51333 6.513C6.50666 6.39967 6.5 6.27967 6.5 6.16634C6.5 3.77301 8.44 1.83301 10.8333 1.83301C13.2267 1.83301 15.1667 3.77301 15.1667 6.16634Z" stroke={selectedJob === "연구・R&D" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.4987 10.8333C10.4987 13.2267 8.5587 15.1667 6.16536 15.1667C3.77203 15.1667 1.83203 13.2267 1.83203 10.8333C1.83203 8.44 3.77203 6.5 6.16536 6.5C6.2787 6.5 6.39869 6.50666 6.51202 6.51333C8.62536 6.67999 10.3187 8.37334 10.4854 10.4867C10.492 10.6 10.4987 10.72 10.4987 10.8333Z" stroke={selectedJob === "연구・R&D" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4.22536 1.83301H2.4987C2.13203 1.83301 1.83203 2.13301 1.83203 2.49967V4.22634C1.83203 4.81967 2.55203 5.11967 2.97203 4.69967L4.69869 2.973C5.11202 2.553 4.8187 1.83301 4.22536 1.83301Z" stroke={selectedJob === "연구・R&D" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.7718 15.1662H14.4985C14.8652 15.1662 15.1652 14.8662 15.1652 14.4995V12.7729C15.1652 12.1795 14.4452 11.8795 14.0252 12.2995L12.2985 14.0262C11.8852 14.4462 12.1785 15.1662 12.7718 15.1662Z" stroke={selectedJob === "연구・R&D" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <StyledSpan spanColor={selectedJob === "연구・R&D" ? "#2563EB" : ""}>
      연구・R&D
      </StyledSpan>
    </Job>


    <Job
      onClick={() => handleJobClick("법률・특허")}
      clicked={selectedJob === "법률・특허" }
      >
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.1654 11.6605V3.61378C15.1654 2.81378 14.512 2.22045 13.7187 2.28712H13.6787C12.2787 2.40712 10.152 3.12045 8.96536 3.86712L8.85203 3.94045C8.6587 4.06045 8.3387 4.06045 8.14536 3.94045L7.9787 3.84045C6.79203 3.10045 4.67203 2.39378 3.27203 2.28045C2.4787 2.21378 1.83203 2.81378 1.83203 3.60712V11.6605C1.83203 12.3005 2.35203 12.9005 2.99203 12.9805L3.18536 13.0071C4.63203 13.2005 6.86536 13.9338 8.14536 14.6338L8.17203 14.6471C8.35203 14.7471 8.6387 14.7471 8.81203 14.6471C10.092 13.9405 12.332 13.2005 13.7854 13.0071L14.0054 12.9805C14.6454 12.9005 15.1654 12.3005 15.1654 11.6605Z" stroke={selectedJob === "법률・특허" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.5 4.16016V14.1602" stroke={selectedJob === "법률・특허" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.66797 6.16016H4.16797" stroke={selectedJob === "법률・특허" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6.16797 8.16016H4.16797" stroke={selectedJob === "법률・특허" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <StyledSpan spanColor={selectedJob === "법률・특허" ? "#2563EB" : ""}>
      법률・특허
      </StyledSpan>
    </Job>



      <Job
        onClick={() => handleJobClick("엔지니어링・설계")}
        clicked={selectedJob === "엔지니어링・설계" }
        >
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 10.5C9.60457 10.5 10.5 9.60457 10.5 8.5C10.5 7.39543 9.60457 6.5 8.5 6.5C7.39543 6.5 6.5 7.39543 6.5 8.5C6.5 9.60457 7.39543 10.5 8.5 10.5Z" stroke={selectedJob === "엔지니어링・설계" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.83203 9.0863V7.91297C1.83203 7.21963 2.3987 6.6463 3.0987 6.6463C4.30536 6.6463 4.7987 5.79297 4.19203 4.7463C3.84536 4.1463 4.05203 3.3663 4.6587 3.01963L5.81203 2.35963C6.3387 2.0463 7.0187 2.23297 7.33203 2.75963L7.40536 2.8863C8.00536 3.93297 8.99203 3.93297 9.5987 2.8863L9.67203 2.75963C9.98536 2.23297 10.6654 2.0463 11.192 2.35963L12.3454 3.01963C12.952 3.3663 13.1587 4.1463 12.812 4.7463C12.2054 5.79297 12.6987 6.6463 13.9054 6.6463C14.5987 6.6463 15.172 7.21297 15.172 7.91297V9.0863C15.172 9.77963 14.6054 10.353 13.9054 10.353C12.6987 10.353 12.2054 11.2063 12.812 12.253C13.1587 12.8596 12.952 13.633 12.3454 13.9796L11.192 14.6396C10.6654 14.953 9.98536 14.7663 9.67203 14.2396L9.5987 14.113C8.9987 13.0663 8.01203 13.0663 7.40536 14.113L7.33203 14.2396C7.0187 14.7663 6.3387 14.953 5.81203 14.6396L4.6587 13.9796C4.05203 13.633 3.84536 12.853 4.19203 12.253C4.7987 11.2063 4.30536 10.353 3.0987 10.353C2.3987 10.353 1.83203 9.77963 1.83203 9.0863Z" stroke={selectedJob === "엔지니어링・설계" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <StyledSpan spanColor={selectedJob === "엔지니어링・설계" ? "#2563EB" : ""}>
        엔지니어링・설계
        </StyledSpan>
    </Job>


    <Job
      onClick={() => handleJobClick("생산・품질")}
      clicked={selectedJob === "생산・품질" }
      >
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.1654 8.033V5.19301C14.1654 2.50635 13.5387 1.83301 11.0187 1.83301H5.9787C3.4587 1.83301 2.83203 2.50635 2.83203 5.19301V12.6997C2.83203 14.473 3.80537 14.893 4.98537 13.6263L4.99202 13.6197C5.53869 13.0397 6.37202 13.0863 6.84536 13.7197L7.5187 14.6197" stroke={selectedJob === "생산・품질" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.6333 14.7667C13.8115 14.7667 14.7667 13.8115 14.7667 12.6333C14.7667 11.4551 13.8115 10.5 12.6333 10.5C11.4551 10.5 10.5 11.4551 10.5 12.6333C10.5 13.8115 11.4551 14.7667 12.6333 14.7667Z" stroke={selectedJob === "생산・품질" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15.1667 15.1667L14.5 14.5" stroke={selectedJob === "생산・품질" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.83203 5.16699H11.1654" stroke={selectedJob === "생산・품질" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6.5 7.83301H10.5" stroke={selectedJob === "생산・품질" ? "#2563EB" : "#FF706F"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <StyledSpan spanColor={selectedJob === "생산・품질" ? "#2563EB" : ""}>
      생산・품질
      </StyledSpan>
    </Job> 
    </JobWrap>
  )
}

const JobWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Job = styled.div<{ clicked?: boolean }>`
  display: flex;
  background-color: ${(props) => (props.clicked ? theme.greyScale.blie : theme.greyScale.blueGrey)};
  padding: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 21px;
  cursor: pointer;
  transition: background-color 0.3s;

  svg {
    margin-right: 4px;
  }

  &:hover {
    background-color: ${(props) => (props.clicked ? theme.greyScale.blie : theme.greyScale.blueGrey)};
  }
`;

const StyledSpan = styled.span<{ spanColor?: string }>`
  color: ${(props) => props.spanColor || 'inherit'};
`;
