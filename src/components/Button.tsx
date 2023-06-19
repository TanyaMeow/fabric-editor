import React from "react";

export function Button({ text, name }: any) {
    return (
        <button className={name}>{text}</button>
    )
}