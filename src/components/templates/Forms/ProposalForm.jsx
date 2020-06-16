import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { useSelector } from "react-redux";

import FormItem from "@molecules/FormItem/FormItem";
import AvatarUpload from "@molecules/Upload/AvatarUpload";
import Radio from "@molecules/Radio/Radio";
import { useTranslation } from "react-i18next";

const radioOptions = [
  {
    key: "100",
    label: "100m",
    value: "100",
    span: 6,
  },
  {
    key: "250",
    label: "250m",
    value: "200",
    span: 6,
  },
  {
    key: "500",
    label: "500m",
    value: "500",
    span: 6,
  },
  {
    key: "1000",
    label: "1km",
    value: "1000",
    span: 6,
  },
  {
    key: "1500",
    label: "1.5km",
    value: "1500",
    span: 6,
  },
  {
    key: "2500",
    label: "2.5km",
    value: "2500",
    span: 6,
  },
  {
    key: "5000",
    label: "5km",
    value: "5000",
    span: 6,
  },
  {
    key: "10000",
    label: "10km 이상",
    value: "10000",
    span: 6,
  },
];

const radioPaymentOptions = [
  {
    key: "현금결제",
    label: "현금결제",
    value: "1",
    span: 6,
  },
  {
    key: "계좌이체",
    label: "계좌이체",
    value: "2",
    span: 6,
  },
];

export const ConnectForm = ({ children }) => {
  const methods = useFormContext();

  return children({
    ...methods,
  });
};

export const ProposalForm = (props) => {
  const user = useSelector((state) => state.user);
  const { t } = useTranslation();

  return (
    <ConnectForm>
      {({ register, errors, control, getValues }) => (
        <div>
          <FormItem
            label={t("label_username")}
            labelFor="username"
            name="username"
            error={errors.username}
          >
            <input
              id="username"
              name="username"
              defaultValue={user.name}
              ref={register({ required: true })}
              disabled
            />
          </FormItem>
          <FormItem
            label="이메일"
            labelFor="email"
            name="email"
            error={errors.email}
          >
            <input
              id="email"
              name="email"
              defaultValue={user.email}
              ref={register({
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
              disabled
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
              ref={register({ required: true })}
            />
          </FormItem>
          <FormItem
            label="이동 가능 거리"
            name="distance"
            required
            error={errors.distance}
          >
            <Controller
              name="distance"
              as={
                <Radio options={radioOptions} style={{ marginTop: "10px" }} />
              }
              control={control}
              onChange={([distance]) => {
                return distance;
              }}
              rules={{ required: true }}
            />
          </FormItem>
          <FormItem
            label="연락 가능 시간"
            name="time"
            required
            error={errors.time}
          >
            <Controller
              name="time"
              as={
                <Radio options={radioOptions} style={{ marginTop: "10px" }} />
              }
              control={control}
              onChange={([time]) => {
                return time;
              }}
              rules={{ required: true }}
            />
          </FormItem>
          <FormItem
            label="결제수단"
            name="payment"
            required
            error={errors.payment}
          >
            <Controller
              name="payment"
              as={
                <Radio
                  options={radioPaymentOptions}
                  style={{ marginTop: "10px" }}
                />
              }
              control={control}
              onChange={([payment]) => {
                return payment;
              }}
              rules={{ required: true }}
            />
          </FormItem>
        </div>
      )}
    </ConnectForm>
  );
};

export default ProposalForm;
