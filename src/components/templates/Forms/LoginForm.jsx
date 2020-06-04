import React from "react";
import { useForm } from "react-hook-form";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

import FormItem from "@molecules/FormItem/FormItem";
import TextButton from "@atoms/Buttons/TextButton";
import MainButton from "@atoms/Buttons/MainButton";

const LoginForm = (props) => {
  const { onSubmit } = props;
  const { register, handleSubmit, errors, watch } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-item">
        <MailOutlined className="form-icon" />
        <FormItem
          label="이메일"
          labelFor="email"
          name="email"
          required
          error={errors.email}
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
      </div>
      <div className="form-item">
        <LockOutlined className="form-icon" />
        <FormItem
          label="비밀번호"
          labelFor="password"
          name="password"
          required
          error={errors.password}
        >
          <input
            id="password"
            name="password"
            ref={register({
              required: true,
            })}
            placeholder="비밀번호를 입력해주세요."
          />
        </FormItem>
      </div>
      <div className="find-wrapper">
        <TextButton type="button">아이디 찾기</TextButton>
        <TextButton type="button">비밀번호 찾기</TextButton>
      </div>
      <MainButton type="submit" color="primary" style={{ marginTop: "28px" }}>
        로그인
      </MainButton>
    </form>
  );
};

export default LoginForm;
