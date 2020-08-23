import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const TermsCheckboxes = ({ onChange, onView }) => {
  const { t } = useTranslation();

  const [agree, setAgree] = useState({
    privacy: false,
    id: false,
    // id_service: false
  });
  const [agreeAll, setAgreeAll] = useState(false);

  const handleCheck = (key, checked) => {
    if (key === "all") {
      setAgree({
        privacy: checked,
        id: checked,
      });
    } else {
      setAgree({
        ...agree,
        [key]: checked,
      });
    }
  };

  const handleView = (key, checked) => {
    if (checked) {
      onView(key);
    } else {
      onView(null);
    }
  };
  useEffect(() => {
    setAgreeAll(agree.privacy && agree.id);
    onChange(agree.privacy);
  }, [agree.privacy]);

  // useEffect(() => {
  //   onChange(agreeAll);
  // }, [agreeAll]);

  return (
    <div className="rr-terms">
      {/* <div className="terms-item">
        <div className="checkbox-wrapper">
          <Checkbox
            checked={agreeAll}
            onChange={(e) => handleCheck("all", e.target.checked)}
          />
        </div>
        <div className="text-wrapper">
          <p className="title">{t("lbl_agree_all")}</p>
        </div>
      </div> */}

      <div className="terms-item">
        <div className="checkbox-wrapper">
          <Checkbox
            checked={agree.privacy}
            onChange={(e) => handleCheck("privacy", e.target.checked)}
          />
        </div>
        <div className="text-wrapper">
          <p className="text">
            {t("lbl_agree_privacy")} ({t("lbl_reqiured")})
          </p>
        </div>
        <div className="icon-wrapper">
          <RightOutlined onClick={() => onView("privacy")} />
        </div>
      </div>

      {/* <div className="terms-item">
        <div className="checkbox-wrapper">
          <Checkbox
            checked={agree.id}
            onChange={(e) => handleCheck("id", e.target.checked)}
          />
        </div>
        <div className="text-wrapper">
          <p className="text">
            {t("lbl_agree_id")} ({t("lbl_reqiured")})
          </p>
        </div>
        <div className="icon-wrapper">
          <RightOutlined onClick={() => onView("id")} />
        </div>
      </div> */}

      {/* <div className="terms-item">
        <div className="checkbox-wrapper">
          <Checkbox
              checked={selectedAll}
              onChange={(e) => onToggleSelectAll(e.target.checked)}
            />
        </div>
        <div className="text-wrapper">
          <p className="text">
            {t("lbl_agree_id_service")} ({t("lbl_reqiured")})
          </p>
        </div>
        <div className="icon-wrapper">
        <RightOutlined onClick={() => handleView("id_service")} />
        </div>
      </div> */}
    </div>
  );
};

TermsCheckboxes.propTypes = {
  onChange: PropTypes.func,
};
TermsCheckboxes.defaultProps = {
  onChange: () => {},
};
export default TermsCheckboxes;
