import React from "react";
import {Button} from "./Button";

export function Header() {
    return (
        <header className="header">
            <div className="tools">
                <Button name={'save'}
                        text={'Сохранить'}/>
            </div>
        </header>
    )
}