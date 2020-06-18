import React from "react";
import PropTypes from "prop-types";

import CommonLayout from "@templates/Layouts/CommonLayout";

const Team = ({ t }) => {
  return (
    <CommonLayout
      pageName={t("lbl_team")}
      showMenuButton={false}
      backgroundColor="#ffffff"
    >
      <div></div>
    </CommonLayout>
  );
};

Team.propTypes = {};

export default Team;
