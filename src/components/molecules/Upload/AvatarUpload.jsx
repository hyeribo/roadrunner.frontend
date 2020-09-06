import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Upload, message, Spin } from "antd";

import defaultImg from "@assets/images/bedge-card-urgent.png";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file, t) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    // message.error("You can only upload JPG/PNG file!");
    message.error(t("frm_file_ext"));
  }
  const isLt2M = file.size / 1024 / 1024 < 5;
  if (!isLt2M) {
    // message.error("Image must smaller than 2MB!");
    message.error(t("frm_file_size"));
  }
  return isJpgOrPng && isLt2M;
}

const AvatarUpload = (props) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const { name, onChange } = props;
  const { t } = useTranslation();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageData) => {
        setImage(imageData);
        setLoading(false);
        const fileUrl = info.file.response.data.files[0].path;
        onChange(fileUrl);
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
      action={`${process.env.REACT_APP_API_BASE_URL}/upload/userProfileImage`}
      beforeUpload={(file) => beforeUpload(file, t)}
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
