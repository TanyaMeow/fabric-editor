import React from "react";
import {Button} from "./Button";

export function Footer() {
    return (
        <footer className="footer">
            <div className="story">
                <Button name={'undo'}
                        text={'Назад'}/>
                <Button name={'redo'}
                        text={'Вперед'}/>
            </div>
        </footer>
    )
}