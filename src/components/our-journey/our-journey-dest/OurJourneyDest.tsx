import React, { useState, useEffect } from "react";
import Styles from "./OurJourneyDest.module.scss";
import classnames from "classnames";

const OurJourneyDest = () => {
    const journeyData = [
        {
            id: 1,
            year: 2016,
            achievementText: "Founded Epictus Solutions",
            achievementMonth: "November"
        },
        {
            id: 2,
            year: 2017,
            achievementText: "Launched GPS & Transportation services",
            achievementMonth: "November",
            achievementText_2: "",
            achievementMonth_2: ""
        },
        {
            id: 3,
            year: 2018,
            achievementText: "Reached 1.5cr revenue mark",
            achievementMonth: "November"
        },
        {
            id: 4,
            year: 2019,
            achievementText: "Launched Vahak, backed by an angel investor",
            achievementMonth: "November",
            achievementText_2: "",
            achievementMonth_2: ""
        },
        {
            id: 5,
            year: 2020,
            achievementText: "Raised VC round from Leo Capital",
            achievementMonth: "November"
        },
        {
            id: 6,
            year: 2021,
            achievementText: "2.5L+ transporters on the platform",
            achievementMonth: "November"
        }
    ];

    const [active, setActive] = useState(1);

    const handleActive = (id: number) => {
        setActive(id);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (active < 6) {
                setActive((prevCount) => prevCount + 1);
            } else {
                setActive((prevCount) => prevCount - 5);
            }
        }, 6000);

        return () => clearInterval(interval);
    }, [active]);

    return (
        <section className={Styles.ourJourneySection}>
            <div className="container">
                <div className={Styles.heading}>
                    <h2>Our Journey So Far</h2>
                </div>

                <div className={Styles.ourJourneyBox}>
                    {journeyData.map((journey) => (
                        <div
                            key={journey.id}
                            className={classnames(Styles.journeyCol, journey.id === active ? Styles.active : "")}
                        >
                            <div className={Styles.journyText}>
                                <div className={Styles.activeStik}></div>
                                <div className={Styles.description}>
                                    <span>{journey.achievementMonth}</span>
                                    <h4>{journey.achievementText}</h4>
                                </div>

                                <div className={Styles.journyYears} onClick={() => handleActive(journey.id)}>
                                    <span>{journey.year}</span>
                                </div>
                                <div className={Styles.dottButtom}>
                                    <span></span>
                                </div>
                                <div className={Styles.activeDott}>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurJourneyDest;
