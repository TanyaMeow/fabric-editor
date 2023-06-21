import React from "react";
import {ReactComponent as Square} from "../icons/square.svg";
import {ReactComponent as Circle} from "../icons/circle.svg";
import {ReactComponent as Triangle} from "../icons/triagle.svg";
import {ReactComponent as Heart} from "../icons/heart.svg";
import {ReactComponent as Star} from "../icons/star.svg";
import {ReactComponent as Moon} from "../icons/moon.svg";
import {ReactComponent as Leaf} from "../icons/leaf.svg";
import {Canvas} from "../core/canvasService";

export function makeDrawFigureButton(name: string) {
    return function DrawFigureButton() {
        return (
            <div className="svg_figure" onClick={() => Canvas.drawFigure(name)}>
                { name === 'square' ? <Square fill="#F4F4FF"
                                              width="35px"
                                              height="35px"/> : null }
                { name === 'circle' ? <Circle fill="#F4F4FF"
                                              width="35px"
                                              height="35px"/> : null }
                { name === 'triangle' ? <Triangle fill="#F4F4FF"
                                                width="35px"
                                                height="35px"/> : null }
                { name === 'heart' ? <Heart fill="#F4F4FF"
                                            width="35px"
                                            height="35px"/> : null }
                { name === 'star' ? <Star fill="#F4F4FF"
                                          width="35px"
                                          height="35px"/> : null }
                { name === 'moon' ? <Moon fill="#F4F4FF"
                                          width="35px"
                                          height="35px"/> : null }
                { name === 'leaf' ? <Leaf fill="#F4F4FF"
                                          width="35px"
                                          height="35px"/> : null }
            </div>
        )
    }
}