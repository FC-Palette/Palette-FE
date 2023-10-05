import styled from "styled-components";
import { Button, ChangeProfilImage, Input } from "../common";
import { MODIFY_PROFILE_INPUT_TEXTS } from "@/constants/modifyprofile";
import { theme } from "@/styles";
import { ModifyPhoneNumberInput } from "./ModifyPhoneNumberInput";
import { ModifyBioText } from "./ModifyBioText";
import { ModifyPosition } from "./ModifyPosition";
import { ModifySex } from "./ModifySex";
import { ModifyJob } from "./ModifyJob";
import { useEffect, useState } from "react";
import { decoder } from "@/utils";
import { authInstance, getMyPage } from "@/api";
import { useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_BASE_URL;


export const ModifyProfileArea = () => {
  const { member_id } = useParams();
  const decodedPayload = decoder();

  const [formData, setFormData] = useState({
    image: null as File | null,
    email: null,
    name: null,
    phoneNumber: null,
    birthday: null,
    nickname: null,
    bio: '',
    sex: null,
    position: null,
    job: null,
  });

  console.log(formData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;

        if (member_id) {
          data = await getMyPage(member_id);
        } else {
          data = await getMyPage(decodedPayload.memberId);
        }

        if (data) {
          const {
            image,
            name,
            phoneNumber,
            birthday,
            nickname,
            bio,
            sex,
            position,
            job,
          } = data.response;

          const email = decodedPayload.sub;

          setFormData({
            ...formData,
            image: image || null,
            email: email || null,
            name: name || null,
            phoneNumber: phoneNumber || null,
            birthday: birthday ? birthday.replace(/-/g, '') : null,
            nickname: nickname || null,
            bio: bio || '',
            sex: sex || null,
            position: position || null,
            job: job || null,
          });

          console.log(data.response);
        } else {
          console.error('사용자 데이터를 불러오지 못했습니다.');
        }
      } catch (error) {
        console.error('사용자 데이터 가져오기 오류:', error);
      }
    };

    fetchData();
  }, [member_id]);

  const handleImageChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file as File | null,
      });
    }
  };


  const handleModify = async () => {
    try {
      // FormData 객체 생성
      const profileData = new FormData();
  
      // 이미지 데이터를 추가
      profileData.append('image', formData.image || '');
  
      // 서버로 이미지 데이터를 전송
      const imageResponse = await authInstance.post(
        `${apiUrl}api/mypage/${decodedPayload.memberId}`,
        profileData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', 
          },
        }
      );
  


      const textResponse = await authInstance.post(
        `${apiUrl}api/mypage/${decodedPayload.memberId}`,
        profileData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          params: {
            dto: JSON.stringify({
              email: formData.email,
              name: formData.name,
              phoneNumber: formData.phoneNumber,
              birthday: formData.birthday,
              nickname: formData.nickname,
              bio: formData.bio,
              sex: formData.sex,
              position: formData.position,
              job: formData.job,
            }),
          },
        }
      );
  
      console.log('프로필 수정 결과 (이미지):', imageResponse.data);
      console.log('프로필 수정 결과 (텍스트):', textResponse.data);
      alert('데이터 수정 완료 테스트 메세지');
    } catch (error) {
      console.error('프로필 수정 오류:', error);
    }
  };





  const handleChange = (event) => {
    const { name, type } = event.target;
  
    if (type === 'file') {
      const file = event.target.files[0];
      setFormData({
        ...formData,
        [name]: file,
      });
    } else {
      const value = event.target.value;
      setFormData({
        ...formData,
        [name]: value !== '' ? value : null,
      });
    }
  };

  return (
    <Wrap>
      <ImageWrap>
        <label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
          <SvgWrap style={{ marginLeft: formData.image ? '10%' : '0', marginTop: formData.image ? '9%' : '0' }}>
            <ChangeProfilImage />
          </SvgWrap>
          <img src={formData.image instanceof Blob ? URL.createObjectURL(formData.image) : undefined}  />
        </label>
      </ImageWrap>
      <InputArea>
        {MODIFY_PROFILE_INPUT_TEXTS.emailText}
        <Input ph={decodedPayload.sub} disabled />
      </InputArea>
      <InputArea>
        {MODIFY_PROFILE_INPUT_TEXTS.nameText}
        <Input name="name" value={formData.name || ''} onChange={handleChange} />
      </InputArea>
      <InputArea>
      <TitleWrap>
        {MODIFY_PROFILE_INPUT_TEXTS.nicknameText}
        <span>{MODIFY_PROFILE_INPUT_TEXTS.necessarySymbol}</span>
        <Input name="nickname" value={formData.nickname || ''} onChange={handleChange}  />
      </TitleWrap>
      </InputArea>
      <InputArea>
        <ModifyPhoneNumberInput formData={formData} setFormData={setFormData} />
      </InputArea>
      <InputArea>
        {MODIFY_PROFILE_INPUT_TEXTS.birthText}
        <Input ph={formData.birthday || ''} disabled />
      </InputArea>
      <ModifyBioText formData={formData} setFormData={setFormData} />
      <InputArea>
        {MODIFY_PROFILE_INPUT_TEXTS.sexText}
        <ModifySex  formData={formData} setFormData={setFormData} />
      </InputArea>
      <InputArea>
        <ModifyPosition formData={formData} setFormData={setFormData} />
      </InputArea>
      <InputArea>
        <ModifyJob formData={formData} setFormData={setFormData} />
      </InputArea>
      <ApplyWrap>
      <Button onClick={handleModify}>
          {MODIFY_PROFILE_INPUT_TEXTS.completeModifytext}</Button>
      </ApplyWrap>
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
  display: flex;
  flex-direction: column;
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

const TitleWrap = styled.div`
  span{
    padding-left: 2px;
    color: #FF5A5A;
  }
`

const ApplyWrap = styled.div`
  padding-bottom: 30px;
  button{
    width: 100%;
  }
`

const ImageWrap = styled.div`
  width: 122px;
  height: 122px;
  background-color: ${theme.greyScale.grey1};
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid rgba( 0,0,0, .3);
  margin-top: 22px;
  margin-bottom: 46px;
  cursor: pointer;
  img{
    width: 122px;
    height: 122px;
    border-radius: 50%;
    position: absolute;
    cursor: pointer;
  }
  svg{
    margin: 49px;
    background-color: white;
    border-radius: 50%;
    border: 1px solid rgba( 0,0,0, .3);
    padding: 1px;
    cursor: pointer;
  }
`
const SvgWrap = styled.div`
  position: absolute;
  height: 30px;
`
