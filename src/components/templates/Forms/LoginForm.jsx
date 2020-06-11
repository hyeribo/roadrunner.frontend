import React from "react";
import { useForm } from "react-hook-form";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import FormItem from "@molecules/FormItem/FormItem";
import TextButton from "@atoms/Buttons/TextButton";
import MainButton from "@atoms/Buttons/MainButton";

const LoginForm = (props) => {
  const { t } = useTranslation();
  const { onSubmit } = props;
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-item">
        <MailOutlined className="form-icon" />
        <FormItem
          label={t("lbl_email")}
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
            placeholder={t("frm_email")}
          />
        </FormItem>
      </div>
      <div className="form-item">
        <LockOutlined className="form-icon" />
        <FormItem
          label={t("lbl_password")}
          labelFor="password"
          name="password"
          required
          error={errors.password}
        >
          <input
            id="password"
            name="password"
            type="password"
            ref={register({
              required: true,
            })}
            placeholder={t("frm_password")}
          />
        </FormItem>
      </div>
      {/* <div className="find-wrapper">
        <TextButton type="button">아이디 찾기</TextButton>
        <TextButton type="button">비밀번호 찾기</TextButton>
      </div> */}
      <MainButton type="submit" color="primary" style={{ marginTop: "28px" }}>
        {t("lbl_login")}
      </MainButton>
    </form>
  );
};

export default LoginForm;
