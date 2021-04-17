import React, { useContext } from "react";
import Styles from "./OurJourney.module.scss";
import { AppContext } from "../../../app-context";
import classnames from "classnames";
import OurJourneyDest from "./our-journey-dest/OurJourneyDest";

const OurJourney = () => {
    const { isMobile } = useContext(AppContext);

    return <>{isMobile ? <div></div> : <OurJourneyDest />}</>;
};

export default OurJourney;
