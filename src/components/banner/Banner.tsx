import React, { useContext } from "react";
import BannerDest from "./banner-dest/BannerDest";
import { AppContext } from "../../../app-context";

const Banner = () => {
    const { isMobile } = useContext(AppContext);

    return <>{isMobile ? <div></div> : <BannerDest />}</>;
};

export default Banner;
