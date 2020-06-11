import React, { useState } from "react";
import PropTypes from "prop-types";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const ListItem = (props) => {
  const [active, setActive] = useState(false);
  const { title, subtitle, content } = props;
  return (
    <div className="rr-list-item" onClick={() => setActive(!active)}>
      <div className="content-wrapper">
        <div className="content">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
        </div>
        {active ? <UpOutlined /> : <DownOutlined />}
      </div>
      {active && (
        <div className="collapse-content">
          {content.split("\\n").map((item, i) => {
            return (
              <p key={i}>
                {item}
                <br />
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string,
};
ListItem.defaultProps = {
  title: "",
  subtitle: "",
  content: "",
};

export default ListItem;
