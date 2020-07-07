import React from "react";

const TotalPrice = ({ price }) => {
  return (
    <div className="rr-total-price">
      <div className="total">
        <span className="label">총 금액 </span>
        <span className="price">{price}</span>
      </div>
      <div className="runner-tip">
        <span className="label">러너 팁 </span>
        <span className="price">{price * 0.1}</span>
        <div className="helpbox">(물품 가격의 10%)</div>
      </div>
    </div>
  );
};

export default TotalPrice;
