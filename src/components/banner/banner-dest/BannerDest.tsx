import React, { useRef, useState, useContext, useEffect } from "react";
import Styles from "./BannerDest.module.scss";
import { AppContext } from "../../../../app-context";
import BannerBgImage from "../../../../assets/images/bannerimage_1200x800.png";
import classnames from "classnames";
import FadeIn from "react-lazyload-fadein";
import A from "../../../utils/app-anchor/A";
import { getHeightByViewPort } from "../../../../utils/methods";
import { ReactComponent as ArrowDownWhite } from "../../../../assets/icons/arrowDownWhite.svg";
import { useIntersect } from "../../../../utils/hooks/useIntersect";

// const thresholdArray = () => Array.from(Array(100).keys(), (i) => i / 100);

const BannerDest = () => {
    const { isMobile } = useContext(AppContext);

    // const [ourStory, setourStory] = useState(false);
    // const { entry: interSectionObjOurStory, setNode: ourStoryRefCallback } = useIntersect({
    //     rootMargin: getHeightByViewPort(0),
    //     threshold: thresholdArray()
    // });

    const myRef: any = useRef();
    const [state, setState] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    const onScroll = () => {
        const scrollTop = myRef.current.scrollTop;
        setState(scrollTop + 700);
    };

    const viewPortWidth = window.screen.availWidth;

    useEffect(() => {
        window.addEventListener("scroll", function () {
            const scrollY = window.scrollY;
            setScrollY(scrollY);
        });
    }, [scrollY]);

    return (
        <section
            className={classnames(Styles.bannerSection, "flipAnimate")}
            ref={myRef}
            onScroll={onScroll}
            style={{ overflowY: scrollY >= 90 ? "hidden" : "scroll", overflowX:"hidden" }}
        >
            <div className="container">
                <div className={Styles.bannerRow}>
                    <div className={Styles.textCol}>
                        <div className={Styles.text}>
                            <h1>
                                Building India’s Leading{" "}
                                <span data-hover="B2B Road Transportation Marketplace" className="indaiText">
                                    B2B Road Transportation Marketplace
                                </span>
                            </h1>
                            <A
                                className={Styles.meetUsBtn}
                                href="#"
                                style={{
                                    backgroundColor: "#1053FF",
                                    color: "#fff",
                                    textAlign: "center",
                                    fontSize: isMobile ? "14px" : "20px",
                                    padding: isMobile ? "10px" : "15px",
                                    height: isMobile ? "46px" : "60px",
                                    width: isMobile ? "140px" : "190px",
                                    display: "block",
                                    marginTop: isMobile ? "10px" : "40px",
                                    lineHeight: isMobile ? "28px" : "32px",
                                    fontWeight: "bold",
                                    borderRadius: "6px"
                                }}
                            >
                                <span>
                                    Meet Us{" "}
                                    <ArrowDownWhite
                                        style={{
                                            width: isMobile ? "10px" : "15px",
                                            height: isMobile ? "10px" : "15px",
                                            position: "relative",
                                            top: "-1px",
                                            right: "-7px",
                                            transform: "rotate(90deg)"
                                        }}
                                    />
                                </span>
                            </A>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={Styles.aboutStoryCol}
                style={{
                    width: state
                }}
            >
                <div style={{ position: "relative" }}>
                    <div
                        // ref={ourStoryRefCallback}
                        className={Styles.imgBgBox}
                        style={{
                            backgroundImage: `url('${BannerBgImage}')`,
                            borderRadius: state >= 900 ? "0px" : "15px",
                            filter: state >= 1000 ? "blur(4px) brightness(50%)" : "blur(0) brightness(100%)",
                            height: "78vh",
                            width: "100%"
                        }}
                    ></div>

                    {state >= 1000 ? (
                        <div className={Styles.ourStory}>
                            <FadeIn className="fade">
                                {(onLoad: any) => (
                                    <div className={Styles.ourStoryText} onLoad={onLoad}>
                                        <h2>Our Story</h2>
                                        <p>
                                            "The story begins with Karan, one of our co-founders, noticing a huge
                                            problem in India’s logistics space – SMEs were struggling to transport their
                                            product! To resolve this problem and provide logistics companies with the
                                            kind of support they needed to flourish, Karan joined with Vikas, our
                                            second-cofounder, to create Epictus Solutions. This venture helped logistics
                                            businesses with GPS and transportation solutions. With Epictus’ rapid
                                            growth, the co-founders came to a realization that Indian transporters
                                            needed more than what their venture offered – they needed an extensive
                                            platform that would let them digitize all their day-to-day business
                                            operations!
                                        </p>
                                        <p>
                                            And so, after trials, errors and lots of learning – Vahak was born. Today,
                                            Vahak is the biggest online transport marketplace community with over 2
                                            lakh+ Indian transporters on it's platform. In the Indian logistics space,
                                            we aim to be more than just a product – we want to revolutionize the way B2B
                                            transportation happens in India!"
                                        </p>
                                    </div>
                                )}
                            </FadeIn>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div style={{ height: "1000px" }}></div>
        </section>
    );
};

export default BannerDest;
