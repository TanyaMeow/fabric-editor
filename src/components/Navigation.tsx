import React from "react";
import {NavigationFigure} from "./NavigationFigure";
import {NavigationItem} from "./NavigationItem";

export function Navigation() {
    return (
        <div className="block_bar_item">
            <NavigationItem text={'Текст'}/>
            <NavigationFigure/>
            <NavigationItem text={'Изображения'}/>
        </div>
    )
}