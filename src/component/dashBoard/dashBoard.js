import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MetaData from "../metaData/metaData";
import Loader from "../loader/loader"
import userAvatar from "../../images/user.jpg"
import "./dashBoard.css";
import Header from "../layout/header";

const DashBoard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const { t } = useTranslation(); // Access translations
    const [progress, setProgress] = useState(50)

    return (
        <Fragment>
          <MetaData title={t("dashBoard.title")} />
          {loading ? (<Loader/>) :(
            <Fragment>
                <div className="dashMainSection">
                  <Header/>
                  {/* <div className="welcomeSection">
                      <div className="textContent">
                        <p>{t("dashBoard.welcome")}</p>
                        <h3>Mojammel Miya</h3>
                      </div>
                      <div className="userIcon">
                        <div className="imageWrapper">
                          <img src={userAvatar} alt="User Avatar"/>
                        </div>
                      </div>
                  </div> */}



   
              </div>
            </Fragment>
          )}
        </Fragment>
       
      );
};

export default DashBoard;
