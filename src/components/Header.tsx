import React from "react";
import {Button} from "./Button";
import {Canvas} from "../core/canvasService";

export function Header() {
    return (
        <header className="header">
            <div className="tools">
                <Button action={() => Canvas.saveSvg()}
                        name={'save'}
                        text={'Сохранить'}/>
            </div>
        </header>
    )
}