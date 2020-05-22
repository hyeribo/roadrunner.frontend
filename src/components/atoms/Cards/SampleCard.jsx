import React from "react";
import propTypes from "prop-types";

const SampleCard = (props) => {
    return (
        <div className = "rr-sample-card">
            card
        </div>
    )
}
SampleCard.propsTypes = {
    data: propTypes.shape({
        address: propTypes.string,
    writer: propTypes.string,
    writer_id: propTypes.number,
    wdate: propTypes.string,
    hits: propTypes.number,
    title: propTypes.string,
    contents: propTypes.string
    })
}


export default SampleCard;
