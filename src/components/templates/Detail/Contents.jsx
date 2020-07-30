import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export const Contents = ({ items }) => {
  const { t } = useTranslation();

  return (
    <div className="rr-detail-contents">
      {items.map((item, index) => (
        <div className="item-wrapper" key={index}>
          <div className="item-label">{item.label}</div>
          <div className="item-content">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

Contents.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    })
  ),
};

Contents.defaultProps = {
  items: [],
};

export default Contents;
