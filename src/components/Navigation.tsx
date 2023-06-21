import React from "react";
import {NavigationFigure} from "./NavigationFigure";
import {Canvas} from "../core/canvasService";
import {NavigationImage} from "./NavigationImage";
import {NavigationText} from "./NavigationText";

export function Navigation() {
    return (
        <div className="block_bar_item">
            <NavigationText onAdd={() => Canvas.addText()}
                            text={'Текст'}/>
            <NavigationFigure/>
            <NavigationImage />
        </div>
    )
}