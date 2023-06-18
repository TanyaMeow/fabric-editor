import React from "react";

export function DrawFigureButton(path: string) {
    return (
        <div className="svg_figure">
            <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35">
                <path fill="#f4f4ff"
                      d={path}></path>
            </svg>
        </div>
    )
}