import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { MailOutlined, LockOutlined, PlusOutlined } from "@ant-design/icons";

import FormItem from "@molecules/FormItem/FormItem";
import AvatarUpload from "@molecules/Upload/AvatarUpload";

export const ConnectForm = ({ children }) => {
  const methods = useFormContext();

  return children({
    ...methods,
  });
};

export const JoinForm2 = (props) => {
  const { display } = props;
  return (
    <ConnectForm>
      {({ register, errors, control, getValues }) => (
        <div style={{ display }}>
          <FormItem
            label="성별"
            labelFor="gender"
            name="gender"
            required
            error={errors.gender}
            style={{ marginTop: "20px" }}
          >
            <input
              id="gender"
              name="gender"
              ref={register({
                required: true,
              })}
              placeholder="성별을 입력해주세요."
            />
          </FormItem>
        </div>
      )}
    </ConnectForm>
  );
};

export default JoinForm2;
