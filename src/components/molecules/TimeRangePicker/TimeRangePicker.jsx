import React, { useState, useEffect } from "react";
import { TimePicker } from "antd";
import { useTranslation } from "react-i18next";

const TimeRangePicker = ({ initialValue, onChange }) => {
  const [start, setStart] = useState(initialValue || null);
  const [end, setEnd] = useState(initialValue || null);

  useEffect(() => {
    if (onChange) {
      onChange({ start, end });
    }
  }, [start, end]);

  const { t } = useTranslation();
  return (
    <div className="rr-time-range-picker">
      <div className="picker-wrapper">
        <TimePicker
          value={start}
          format="HH:mm"
          onChange={setStart}
          suffixIcon={null}
          placeholder="13:00"
          minuteStep={15}
        />
        <span>{t("lbl_time_to")}</span>
        <TimePicker
          value={end}
          format="HH:mm"
          onChange={setEnd}
          suffixIcon={null}
          placeholder="16:00"
          minuteStep={15}
        />
        <span>{t("lbl_time_from")}</span>
      </div>
    </div>
  );
};

export default TimeRangePicker;
