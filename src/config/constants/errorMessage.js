const errorMessage = {
  email: {
    required: "이메일을 입력해주세요.",
    pattern: "이메일을 바르게 입력해주세요.",
  },
  password: {
    required: "비밀번호를 입력해주세요.",
  },
  realusername: {
    required: "이름을 입력해주세요.",
  },
  realpassword: {
    required: "비밀번호를 입력해주세요.",
    pattern: "영문+숫자+특수문자 6자리 이상 입력해주세요.",
  },
  realpasswordconfirm: {
    required: "비밀번호 확인을 입력해주세요.",
    validate: "비밀번호가 일치하지 않습니다.",
  },
  address: {
    required: "주소를 입력해주세요.",
  },
};

export default errorMessage;
