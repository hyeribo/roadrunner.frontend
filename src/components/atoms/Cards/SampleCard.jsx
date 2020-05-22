import React from "react";
import PropTypes from "prop-types";

const SampleCard = (props) => {
  return (
    <div className="rr-sample-card">
      <div>{props.data.title}</div>
      <div>{props.data.contents}</div>
      {
        props.footer && props.footer
      }
    </div>
  )
}

SampleCard.propTypes = {
  data: PropTypes.shape({
    address: PropTypes.string,
    writer: PropTypes.string,
    writer_id: PropTypes.number,
    wdate: PropTypes.string,
    hits: PropTypes.number,
    title: PropTypes.string,
    contents: PropTypes.string
  }),
  footer: PropTypes.node
}
export default SampleCard;