import React, { useRef, useState } from "react";
// import { getWidthByViewPort } from "../../../utils/methods";

function ScrollY() {
    const myRef: any = useRef();
    
    const [state, setState] = useState(0);

    const onScroll = () => {
        const scrollY = window.scrollY;
        const scrollTop = myRef.current.scrollTop;
        console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`);
        // setState((prevValue)=> prevValue + scrollTop)
        setState(scrollTop);
    };

    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;
        console.log(scrollY);
    });

    return (
        <div
            ref={myRef}
            onScroll={onScroll}
            style={{
                border: "1px solid black",
                width: state,
                height: "100px",
                overflow: "scroll",
                padding: "15px 30px"
            }}
        >
            <div style={{ height: "1162px" }}></div>
        </div>
    );
}

export default ScrollY;
