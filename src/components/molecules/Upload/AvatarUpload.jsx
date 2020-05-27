import React, { useState, useRef } from "react";
import { Upload, message, Spin } from "antd";

import defaultImg from "@assets/images/bedge-card-urgent.png";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const AvatarUpload = (props) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const { name, onChange } = props;

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImage(imageUrl);
        setLoading(false);
        onChange(imageUrl);
      });
    }
  };
  const uploadButton = (
    <Spin spinning={loading}>
      <img src={defaultImg} alt="avatar" style={{ width: "100%" }} />
    </Spin>
  );

  return (
    <Upload
      name={name}
      listType="picture-card"
      className="avatar-uploader rr-avatar-upload"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {image ? (
        <img src={image} alt="avatar" style={{ width: "100%" }} />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export default AvatarUpload;
