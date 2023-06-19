import React from "react";

export function Button({ text }: any, { className }: any) {
    return (
        <button className={className}>{text}</button>
    )
}