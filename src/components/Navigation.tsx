import React from "react";
import {NavigationFigure} from "./NavigationFigure";
import {NavigationItem} from "./NavigationItem";
import {Canvas} from "../core/canvasService";

export function Navigation() {
    return (
        <div className="block_bar_item">
            <NavigationItem onAdd={() => Canvas.addText()}
                            text={'Текст'}/>
            <NavigationFigure/>
            <NavigationItem text={'Изображения'}/>
        </div>
    )
}