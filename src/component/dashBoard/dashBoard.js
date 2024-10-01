import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MetaData from "../metaData/metaData";
import Loader from "../loader/loader"
import "./dashBoard.css";

const DashBoard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation(); // Access translations
    const [progress, setProgress] = useState(50)

    return (
        <Fragment>
          <MetaData title={t("login.title")} />
          {loading ? (<Loader/>) :(
            <Fragment>
                  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  



      {/* <ThreeDTransparentProgress
        title="Optimal"
        value={60}
        colors={['#66ff66', '#33cc33']} // Transparent green tones
        label="18 Fields"
      />
      <ThreeDTransparentProgress
        title="High"
        value={90}
        colors={['#6666ff', '#3333cc']} // Transparent blue tones
        label="42 Fields"
      /> */}
    </div>
            </Fragment>
          )}
        </Fragment>
       
      );
};

export default DashBoard;
