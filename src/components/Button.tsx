import React from "react";

export function Button({ text, name, showPopup }: any) {
    return (
        <button className={name} onClick={showPopup}>{text}</button>
    )
}