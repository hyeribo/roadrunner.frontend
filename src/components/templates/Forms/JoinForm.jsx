import React from "react";
import { useFormContext, Controller } from "react-hook-form";

import FormItem from "@molecules/FormItem/FormItem";
import AvatarUpload from "@molecules/Upload/AvatarUpload";
import Radio from "@molecules/Radio/Radio";

const radioOptions = [
  {
    key: "F",
    label: "여자",
    value: "F",
    span: 6,
  },
  {
    key: "M",
    label: "남자",
    value: "M",
    span: 6,
  },
  {
    key: "O",
    label: "기타",
    value: "O",
    span: 6,
  },
];

export const ConnectForm = ({ children }) => {
  const methods = useFormContext();

  return children({
    ...methods,
  });
};

export const JoinForm = (props) => {
  const validatePasswordConfirm = (value, password) => {
    return value === password;
  };
  return (
    <ConnectForm>
      {({ register, errors, control, getValues }) => (
        <div>
          <Controller
            name="profile_img"
            as={<AvatarUpload />}
            control={control}
            onChange={(imageUrl) => {
              return "imageUrl";
            }}
          />
          <FormItem
            label="이메일"
            labelFor="email"
            name="email"
            required
            error={errors.email}
            style={{ marginTop: "20px" }}
          >
            <input
              id="email"
              name="email"
              ref={register({
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
              placeholder="이메일을 입력해주세요."
            />
          </FormItem>
          <FormItem
            label="이름"
            labelFor="realusername"
            name="realusername"
            required
            error={errors.realusername}
          >
            <input
              id="realusername"
              name="realusername"
              autoComplete="none"
              ref={register({
                required: true,
              })}
              placeholder="이름을 입력해주세요."
            />
          </FormItem>
          <FormItem
            label="비밀번호"
            labelFor="realpassword"
            name="realpassword"
            required
            error={errors.realpassword}
          >
            <input
              id="realpassword"
              name="realpassword"
              type="password"
              autoComplete="new-password"
              ref={register({
                required: true,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/,
              })}
              placeholder="영문+숫자+특수문자 6자리 이상"
            />
          </FormItem>
          <FormItem
            label="비밀번호 확인"
            labelFor="realpasswordconfirm"
            name="realpasswordconfirm"
            required
            error={errors.realpasswordconfirm}
          >
            <input
              id="realpasswordconfirm"
              name="realpasswordconfirm"
              type="password"
              autoComplete="new-password"
              ref={register({
                required: true,
                validate: (value) =>
                  validatePasswordConfirm(value, getValues("realpassword")),
              })}
              placeholder="비밀번호를 다시 입력해주세요."
            />
          </FormItem>
          <FormItem
            label="주소"
            labelFor="address"
            name="address"
            required
            error={errors.address}
          >
            <input
              id="address"
              name="address"
              ref={register({
                required: true,
              })}
              placeholder="예) A동 301호"
            />
          </FormItem>
          <FormItem label="성별" name="gender" required error={errors.gender}>
            <Controller
              name="gender"
              as={
                <Radio options={radioOptions} style={{ marginTop: "10px" }} />
              }
              control={control}
              onChange={([gender]) => {
                return gender;
              }}
              rules={{ required: true }}
            />
          </FormItem>
        </div>
      )}
    </ConnectForm>
  );
};

export default JoinForm;
