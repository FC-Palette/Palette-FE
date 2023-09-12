export const SIGNIN_REGEX_TEXT =  {
    idCondition: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    pwdCondition : /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    engInPwd : /(?=.*[a-zA-Z])/ ,
    numInPwd : /(?=.*\d)/,
    symInPwd : /(?=.*[@$!%*?&])/,
    emptyId : '이메일을 입력해 주세요.',
    emptyPwd: '비밀번호를 입력해 주세요.',
    wrongId : '정확한 이메일 형식을 입력해 주세요.',
    pwdReqEng: '비밀번호는 영문을 포함하여야 합니다.',
    pwdReqNum: '비밀번호는 숫자를 포함하여야 합니다.',
    pwdReqSym: '비밀번호는 특수문자를 포함하여야 합니다.',
    pwdLengLeast: '비밀번호는 최소 8글자입니다.' ,
}