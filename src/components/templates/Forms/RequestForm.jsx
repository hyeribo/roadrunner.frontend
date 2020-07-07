import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import FormItem from "@molecules/FormItem/FormItem";
import Radio from "@molecules/Radio/Radio";
import RequestItemList from "@organisms/RequestItemList/RequestItemList";
import MultiUpload from "@molecules/Upload/MultiUpload";
import TimeRangePicker from "@molecules/TimeRangePicker/TimeRangePicker";

export const ConnectForm = ({ children }) => {
  const methods = useFormContext();

  return children({
    ...methods,
  });
};

export const RequestForm = (props) => {
  const user = useSelector((state) => state.user);
  const { t } = useTranslation();

  const radioOptions = [
    {
      key: "FREE",
      label: t("lbl_priority_low"),
      value: "FREE",
      span: 6,
    },
    {
      key: "NORMAL",
      label: t("lbl_priority_normal"),
      value: "NORMAL",
      span: 6,
    },
    {
      key: "URGENT",
      label: t("lbl_priority_high"),
      value: "URGENT",
      span: 6,
    },
  ];

  const validateItems = (items) => {
    const invalid = items.some((item) => {
      const empty = !item.name || !+item.count || !+item.price;
      return empty;
    });
    return !invalid;
  };

  const validateReceiveTime = (time) => {
    if (!time.start || !time.end) return false;
    if (!time.start.isBefore(time.end)) return false;
    return true;
  };

  return (
    <ConnectForm>
      {({ register, errors, control, setValue }) => (
        <div>
          <FormItem style={{ display: "none" }} name="discussYn">
            <input id="discussYn" name="discussYn" ref={register()} />
          </FormItem>
          <FormItem
            label={t("lbl_req_title")}
            labelFor="reqTitle"
            name="reqTitle"
            required
            error={errors.reqTitle}
          >
            <input
              id="reqTitle"
              name="reqTitle"
              placeholder={t("frm_req_title_pl")}
              ref={register({
                required: true,
              })}
            />
          </FormItem>
          <FormItem
            label={t("lbl_req_items")}
            labelFor="reqItems"
            name="reqItems"
            required
            error={errors.reqItems}
            helpbox="* 러너 팁은 총 금액의 10% 입니다."
          >
            <Controller
              name="reqItems"
              as={<RequestItemList />}
              control={control}
              onChange={([reqItems]) => {
                return reqItems;
              }}
              rules={{ validate: validateItems }}
            />
          </FormItem>
          <FormItem
            label={t("lbl_req_img")}
            name="reqImages"
            error={errors.reqImages}
            extra="이미지가 있으면 등록해주세요."
          >
            <Controller
              name="files"
              as={<MultiUpload />}
              control={control}
              onChange={([reqImages]) => {
                return reqImages;
              }}
            />
          </FormItem>
          <FormItem
            label={t("lbl_receive_time")}
            name="reqReceiveTime"
            error={errors.reqReceiveTime}
            extra="협의 가능"
            onToggleExtra={(checked) => {
              setValue("discussYn", checked);
            }}
          >
            <Controller
              name="reqReceiveTime"
              as={<TimeRangePicker />}
              control={control}
              onChange={([reqReceiveTime]) => {
                return reqReceiveTime;
              }}
              rules={{ validate: validateReceiveTime }}
            />
          </FormItem>
          <FormItem
            label={t("lbl_priority")}
            name="reqPriority"
            required
            error={errors.reqPriority}
            helpbox="* 긴급 선택시 추가요금 5%"
            helpboxPlacement="right"
          >
            <Controller
              name="reqPriority"
              as={
                <Radio
                  initialValue="FREE"
                  options={radioOptions}
                  style={{ marginTop: "10px" }}
                />
              }
              control={control}
              onChange={([reqPriority]) => {
                return reqPriority;
              }}
              rules={{ required: true }}
            />
          </FormItem>
          <FormItem
            label={t("lbl_receive_address")}
            labelFor="reqReceiveAddress"
            name="reqReceiveAddress"
            required
            error={errors.reqReceiveAddress}
            extra="주소지와 동일"
            onToggleExtra={(checked) => {
              if (checked) {
                setValue("reqReceiveAddress", user.address);
              }
            }}
          >
            <input
              id="reqReceiveAddress"
              name="reqReceiveAddress"
              placeholder={t("frm_receive_address")}
              ref={register({
                required: true,
              })}
            />
          </FormItem>
          <FormItem
            label={t("lbl_req_memo")}
            labelFor="reqMemo"
            name="reqMemo"
            error={errors.reqMemo}
          >
            <input
              id="reqMemo"
              name="reqMemo"
              placeholder={t("frm_req_memo_pl")}
              ref={register()}
            />
          </FormItem>
        </div>
      )}
    </ConnectForm>
  );
};

export default RequestForm;
