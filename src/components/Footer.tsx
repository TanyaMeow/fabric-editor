import React from "react";
import {Button} from "./Button";
import {operationsStore} from "../core/operationsStore";

export function Footer() {
    return (
        <footer className="footer">
            <div className="story">
                <Button action={() => operationsStore.undo()}
                        name={'undo'}
                        text={'Назад'}/>
                <Button action={() => operationsStore.redo()}
                        name={'redo'}
                        text={'Вперед'}/>
            </div>
        </footer>
    )
}