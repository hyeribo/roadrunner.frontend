import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

import FormItem from "@molecules/FormItem/FormItem";
import AvatarUpload from "@molecules/Upload/AvatarUpload";
import Radio from "@molecules/Radio/Radio";

export const ConnectForm = ({ children }) => {
  const methods = useFormContext();

  return children({
    ...methods,
  });
};

export const JoinForm = (props) => {
  const { t } = useTranslation();

  const validatePasswordConfirm = (value, password) => {
    return value === password;
  };

  const radioOptions = [
    {
      key: "F",
      label: t("lbl_gender_f"),
      value: "F",
      span: 6,
    },
    {
      key: "M",
      label: t("lbl_gender_m"),
      value: "M",
      span: 6,
    },
    {
      key: "O",
      label: t("lbl_gender_o"),
      value: "O",
      span: 6,
    },
  ];

  return (
    <ConnectForm>
      {({ register, errors, control, getValues }) => (
        <div>
          <Controller
            name="files"
            as={<AvatarUpload />}
            control={control}
            onChange={(imageUrl) => {
              return imageUrl;
            }}
          />
          <FormItem
            label={t("lbl_email")}
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
              placeholder={t("frm_email")}
            />
          </FormItem>
          <FormItem
            label={t("lbl_username")}
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
              placeholder={t("frm_username")}
            />
          </FormItem>
          <FormItem
            label={t("lbl_password")}
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
              placeholder={t("frm_password")}
            />
          </FormItem>
          <FormItem
            label={t("lbl_password_confirm")}
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
              placeholder={t("frm_password_confirm")}
            />
          </FormItem>
          <FormItem
            label={t("lbl_address")}
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
              placeholder={t("frm_address_placeholder")}
            />
          </FormItem>
          <FormItem label={t("lbl_gender")}>
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
