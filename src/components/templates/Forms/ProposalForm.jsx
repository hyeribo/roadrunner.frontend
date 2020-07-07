import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import FormItem from "@molecules/FormItem/FormItem";
import Radio from "@molecules/Radio/Radio";
import TimeRangePicker from "@molecules/TimeRangePicker/TimeRangePicker";

const radioOptions = [
  {
    key: "100",
    label: "100m",
    value: "100M",
    span: 6,
  },
  {
    key: "250",
    label: "250m",
    value: "250M",
    span: 6,
  },
  {
    key: "500",
    label: "500m",
    value: "500M",
    span: 6,
  },
  {
    key: "1000",
    label: "1km",
    value: "1KM",
    span: 6,
  },
  {
    key: "1500",
    label: "1.5km",
    value: "1.5KM",
    span: 6,
  },
  {
    key: "2500",
    label: "2.5km",
    value: "2.5KM",
    span: 6,
  },
  {
    key: "5000",
    label: "5km",
    value: "5KM",
    span: 6,
  },
  {
    key: "10000",
    label: "10km 이상",
    value: "10KM",
    span: 6,
  },
];

const paymentsOptions = [
  {
    key: "현금결제",
    label: "현금결제",
    value: "현금결제",
    span: 6,
  },
  {
    key: "계좌이체",
    label: "계좌이체",
    value: "계좌이체",
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

  const validateContactTime = (time) => {
    if (!time.start || !time.end) return false;
    if (!time.start.isBefore(time.end)) return false;
    return true;
  };

  return (
    <ConnectForm>
      {({ register, errors, control, getValues }) => (
        <div>
          <FormItem
            label={t("lbl_username")}
            labelFor="username"
            name="username"
            error={errors.username}
          >
            <input
              id="username"
              name="username"
              defaultValue={user.displayName}
              ref={register({
                required: true,
              })}
              disabled
            />
          </FormItem>
          <FormItem
            label={t("email")}
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
            label={t("lbl_move_area")}
            labelFor="address"
            name="address"
            error={errors.address}
            required
          >
            <input
              id="address"
              name="address"
              ref={register({
                required: true,
              })}
              placeholder="예) 기숙사 A, B, C동"
            />
          </FormItem>
          <FormItem
            label={t("lbl_enable_distanc")}
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
            label={t("lbl_contact_time")}
            name="contactTime"
            error={errors.contactTime}
            required
          >
            <Controller
              name="contactTime"
              as={<TimeRangePicker />}
              control={control}
              onChange={([contactTime]) => {
                console.log("contactTime", contactTime);
                return contactTime;
              }}
              rules={{ validate: validateContactTime }}
            />
          </FormItem>
          <FormItem
            label={t("lbl_payment_method")}
            name="payments"
            required
            error={errors.payments}
          >
            <Controller
              name="payments"
              as={
                <Radio
                  options={paymentsOptions}
                  style={{ marginTop: "10px" }}
                />
              }
              control={control}
              onChange={([payments]) => {
                return payments;
              }}
              rules={{ required: true }}
            />
          </FormItem>

          <FormItem
            label={t("lbl_now_message")}
            labelFor="message"
            name="message"
            error={errors.message}
            required
          >
            <input
              id="message"
              name="message"
              ref={register({
                required: true,
              })}
              placeholder="예) 필요한 제품 사드립니다."
            />
          </FormItem>

          <FormItem
            label={t("lbl_expect_schedule")}
            labelFor="estimatedTime"
            name="estimatedTime"
            error={errors.estimatedTime}
            required
            extra="예상 일정은 고객의 결정에 도움이 됩니다."
          >
            <input
              id="estimatedTime"
              name="estimatedTime"
              ref={register({
                required: true,
              })}
              placeholder="예) 1시에 A마트 방문 예정입니다."
            />
          </FormItem>

          <FormItem
            label={t("lbl_introduce")}
            labelFor="introduce"
            name="introduce"
            error={errors.introduce}
            required
          >
            <input
              id="introduce"
              name="introduce"
              ref={register({
                required: true,
              })}
              placeholder="예) 집 앞까지 전달해드립니다."
            />
          </FormItem>
        </div>
      )}
    </ConnectForm>
  );
};

export default ProposalForm;
