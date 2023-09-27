export const SIGNIN_REGEX_TEXT =  {
    idCondition: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    // 비밀번호 임시 정규식 모든 문자 허용
    // 추후 변경 필요 (백엔드 비밀번호 설정 이슈 )
    pwdCondition: /^[\s\S]*$/, // 모든 문자 허용
    engInPwd : /(?=.*[a-zA-Z])/ ,
    numInPwd : /(?=.*\d)/,
    symInPwd : /(?=.*[@$!%*?&])/,
    emptyId : '이메일을 입력해 주세요.',
    emptyPwd: '비밀번호를 입력해 주세요.',
    wrongId : '정확한 이메일 형식을 입력해 주세요.',
    pwdReqEng: '비밀번호는 영문을 포함하여야 합니다.',
    pwdReqNum: '비밀번호는 숫자를 포함하여야 합니다.',
    // 추후 추가 필요 (백엔드 비밀번호 설정 이슈 )
    // pwdReqSym: '비밀번호는 특수문자를 포함하여야 합니다.',
    pwdLengLeast: '비밀번호는 최소 8글자입니다.' ,
}