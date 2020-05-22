import React from "react";
import PropTypes from "prop-types";

const SampleCard = (props) => {
  return <div className="rr-sampleCard">{props.contents}</div>;
};

SampleCard.propTypes = {
  address: PropTypes.string,
  writer: PropTypes.string,
  write_id: PropTypes.number,
  wdate: PropTypes.string,
  hits: PropTypes.number,
  title: PropTypes.string,
  contents: PropTypes.string,
};

export default SampleCard;
