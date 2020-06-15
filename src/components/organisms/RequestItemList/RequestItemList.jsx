import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const Item = ({ t, index, data, onChange, onAddItem, onRemoveItem }) => {
  return (
    <div className="item-wrappee">
      <div className="item">
        <div className="item-name">
          <input
            id="itemName"
            name="itemName"
            placeholder={t("frm_req_items_pl")}
            value={data.name}
            onChange={(e) => onChange(index, "name", e.target.value)}
          />
        </div>
        <div className="item-count">
          <input
            id="itemCount"
            name="itemCount"
            type="number"
            min={0}
            value={data.count}
            onChange={(e) => onChange(index, "count", e.target.value)}
          />
          <span className="input-suffix">{t("lbl_measure")}</span>
        </div>
        <div className="item-button">
          {index === 0 ? (
            <PlusOutlined onClick={() => onAddItem()} />
          ) : (
            <MinusOutlined onClick={() => onRemoveItem(index)} />
          )}
        </div>
      </div>
      <div className="item-price">
        <input
          className="suffix"
          id="itemPrice"
          name="itemPrice"
          type="number"
          min={0}
          value={data.price}
          onChange={(e) => onChange(index, "price", e.target.value)}
        />
        <span className="input-suffix">{t("lbl_currency")}</span>
      </div>
    </div>
  );
};

const itemObj = { name: "", count: 0, price: 0 };
const RequestItemList = ({ initialValue, onChange }) => {
  const { t } = useTranslation();
  const [items, setItems] = useState(initialValue || [itemObj]);

  // 데이터 입력
  const handleChangeItem = (index, key, value) => {
    const newItem = {
      ...items[index],
      [key]: value,
    };
    const newItems = [...items];
    newItems.splice(index, 1, newItem);
    setItems([...newItems]);
  };

  // 아이템 추가
  const handleAddItem = () => {
    setItems(items.concat(itemObj));
  };

  // 아이템 삭제
  const handleRemoveItem = (index) => {
    const removedItems = [...items];
    removedItems.splice(index, 1);
    setItems([...removedItems]);
  };

  useEffect(() => {
    if (onChange) onChange(items);
  }, [items]);

  return (
    <div className="rr-req-items">
      {items.map((item, i) => (
        <Item
          key={i}
          index={i}
          data={item}
          t={t}
          onChange={handleChangeItem}
          onAddItem={handleAddItem}
          onRemoveItem={handleRemoveItem}
        />
      ))}
    </div>
  );
};

export default RequestItemList;
