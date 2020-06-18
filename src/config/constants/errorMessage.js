const errorMessage = {
  email: {
    required: "frm_email",
    pattern: "이메일을 바르게 입력해주세요.",
  },
  password: {
    required: "frm_password",
  },
  username: {
    required: "frm_username",
  },
  realusername: {
    required: "frm_username",
  },
  realpassword: {
    required: "frm_password",
    pattern: "frm_password_invalid",
  },
  realpasswordconfirm: {
    required: "frm_password_confirm",
    validate: "frm_password_invalid",
  },
  address: {
    required: "frm_address",
  },
  gender: {
    required: "frm_gender",
  },
  distance: {
    required: "frm_distance",
  },
  reqTitle: {
    required: "frm_req_title",
  },
  reqItems: {
    required: "frm_req_items",
    validate: "frm_req_items_invalid",
  },
  reqReceiveTime: {
    validate: "frm_receive_time",
  },
  reqPriority: {
    required: "frm_req_priority",
  },
  reqReceiveAddress: {
    required: "frm_receive_address",
  },
  contactTime: {
    validate: "frm_contact_time",
  },
  payments: {
    required: "frm_payments",
  },
  message: {
    required: "frm_message",
  },
  estimatedTime: {
    required: "frm_estimated_time",
  },
  introduce: {
    required: "frm_introduce",
  },
};

export default errorMessage;
