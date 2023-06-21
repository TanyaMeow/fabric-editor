import React from "react";
import {Button} from "./Button";
import {popupStore} from "../core/popupStore";
import {Canvas} from "../core/canvasService";

export function Header() {
    return (
        <header className="header">
            <div className="tools">
                <Button showPopup={() => popupStore.textSvg = Canvas.getSVG()}
                        name={'save'}
                        text={'Сохранить'}/>
            </div>
        </header>
    )
}