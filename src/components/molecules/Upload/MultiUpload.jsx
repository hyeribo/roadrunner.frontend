import React, { useState, useEffect } from "react";
import { Upload, message, Spin } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import defaultImg from "@assets/images/img-default.png";

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

const MultiUpload = (props) => {
  const [images, setImages] = useState([]);
  const { name, onChange, ...rest } = props;

  const handleChange = (info) => {
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageData) => {
        setImages(
          images.concat({
            data: imageData,
            path: info.file.response.data.files[0].path,
            filename: info.file.response.data.files[0].filename,
            size: info.file.response.data.files[0].size,
          })
        );
      });
    }
  };

  // 이미지 삭제
  const handleRemoveImage = (index) => {
    const removedImages = [...images];
    removedImages.splice(index, 1);
    setImages([...removedImages]);
  };

  useEffect(() => {
    if (onChange) {
      const imgs = images.map((img) => ({
        path: img.path,
        filename: img.filename,
        size: img.size,
      }));
      onChange(imgs);
    }
  }, [images]);

  return (
    <div className="rr-multi-upload" {...rest}>
      {!images.length ? (
        <div className="image-wrapper">
          <img src={defaultImg} />
        </div>
      ) : (
        images.map((image, i) => (
          <div className="image-wrapper" key={i}>
            <img src={image.data} />
            <div className="image-remove">
              <MinusOutlined onClick={() => handleRemoveImage(i)} />
            </div>
          </div>
        ))
      )}
      <Upload
        name={name}
        showUploadList={false}
        action={`${process.env.REACT_APP_API_BASE_URL}/upload/shopperOrderImages`}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        <div className="upload-button">
          <PlusOutlined />
        </div>
      </Upload>
    </div>
  );
};

export default MultiUpload;
