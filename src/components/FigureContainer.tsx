import React from "react";

export function FigureContainer({ showMenu }: any) {
    return (
        <div className={"svg_container " + (showMenu ? "active" : "")}>
            <div className="new_svg-figure">
                <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25">
                    <path fill="#f4f4ff" d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z"/>
                </svg>
            </div>
        </div>
    )
}