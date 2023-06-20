import React from "react";
import {makeDrawFigureButton} from "./DrawFigureButton";

export function FigureContainer({ showMenu }: any) {
    const Square = makeDrawFigureButton('square', '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Z"/></svg>');
    const Circle = makeDrawFigureButton('circle', '');
    const Triangle = makeDrawFigureButton('triangle', '');
    const Heart = makeDrawFigureButton('heart', '');
    const Star = makeDrawFigureButton('star', '');
    const Moon = makeDrawFigureButton('moon', '');
    const Leaf = makeDrawFigureButton('leaf', '');

    return (
        <div className={"svg_container " + (showMenu ? "active" : "")}>
            <Square />
            <Circle />
            <Triangle />
            <Heart />
            <Star />
            <Moon />
            <Leaf />
            <div className="new_svg-figure">
                <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25">
                    <path fill="#f4f4ff" d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z"/>
                </svg>
            </div>
        </div>
    )
}