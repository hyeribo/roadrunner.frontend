import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DownOutlined, UpOutlined, RightOutlined } from "@ant-design/icons";

const CollapseIcon = ({ active, setActive }) => {
  const toggle = () => {
    setActive(!active);
  };
  if (active) return <UpOutlined onClick={toggle} />;
  else return <DownOutlined onClick={toggle} />;
};

const LinkIcon = ({ url }) => (
  <Link to={url}>
    <RightOutlined />
  </Link>
);

const ListItem = (props) => {
  const [active, setActive] = useState(false);
  const { title, subtitle, expandRight, collapse, url } = props;
  return (
    <div className="rr-list-item">
      <div className="content-wrapper">
        <div className="content">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
        </div>
        {expandRight ? (
          expandRight
        ) : collapse ? (
          <CollapseIcon
            collapse={collapse}
            active={active}
            setActive={setActive}
          />
        ) : (
          <LinkIcon url={url} />
        )}
        {/* <ListItemRight {...rest} active={active} setActive={setActive} /> */}
      </div>
      {active && <div className="collapse-content">{collapse}</div>}
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  collapse: PropTypes.string,
  url: PropTypes.string,
  expandRight: PropTypes.node,
};
ListItem.defaultProps = {
  title: "",
  subtitle: "",
  collapse: "",
  url: "",
  expandRight: null,
};

export default ListItem;
