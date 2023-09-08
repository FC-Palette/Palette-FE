export const SIGNIN_REGEX_TEXT =  {
    idRegexCondition: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    passwordRegexCondition : /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    passwordIncludeEngRegText : /(?=.*[a-zA-Z])/ ,
    passwordIncludeNumRegText : /(?=.*\d)/,
    passwordIncludeSymRegText : /(?=.*[@$!%*?&])/,
    idInsertRegText: '이메일을 입력해 주세요.',
    passwordInsertRegText: '비밀번호를 입력해 주세요.',
    idFormatRegText: '정확한 이메일 형식을 입력해 주세요.',
    passwordIncludeEngText: '비밀번호는 영문을 포함하여야 합니다.',
    passwordIncludeNumText: '비밀번호는 숫자를 포함하여야 합니다.',
    passwordIncludeSymbolText: '비밀번호는 특수문자를 포함하여야 합니다.',
    passwordGreaterNumText: '비밀번호는 최소 8글자입니다.' ,
}