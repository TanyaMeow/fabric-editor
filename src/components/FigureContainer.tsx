import React from "react";
import {makeDrawFigureButton} from "./DrawFigureButton";

export function FigureContainer({ showMenu }: any) {
    const Square = makeDrawFigureButton('square');
    const Circle = makeDrawFigureButton('circle');
    const Triangle = makeDrawFigureButton('triangle');
    const Heart = makeDrawFigureButton('heart');
    const Star = makeDrawFigureButton('star');
    const Moon = makeDrawFigureButton('moon');
    const Leaf = makeDrawFigureButton('leaf');

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