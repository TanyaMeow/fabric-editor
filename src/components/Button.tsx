import React from "react";

export function Button({ text, name, action }: any) {
    return (
        <button className={name} onClick={action}>{text}</button>
    )
}