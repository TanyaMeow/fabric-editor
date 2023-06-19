import React from "react";
import {Button} from "./Button";

export function Footer() {
    return (
        <footer className="footer">
            <div className="story">
                <Button className={'undo'}
                        text={'Назад'}/>
                <Button className={'redo'}
                        text={'Вперед'}/>
            </div>
        </footer>
    )
}