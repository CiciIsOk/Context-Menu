import React,{ useRef, useState } from "react";
import Context from "./Context";
import ContextMenu from "./ContextMenu";

const ContextItem = ( { children } ) => {
    const listItemRef = useRef();
    const [isRightClicked, setRightClicked] = useState(false);

    return (
        <li
        ref={listItemRef}
        onContextMenu={(e) => {
            e.preventDefault();
            setRightClicked(e);
        }}
        >
            <p>{ children }</p>

            <ContextMenu
            parent={listItemRef}
            children={children}
            isRightClicked={isRightClicked}
            />


        </li>
    )
}

export default ContextItem;