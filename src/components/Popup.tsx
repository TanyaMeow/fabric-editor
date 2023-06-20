import React from "react";
import {popupStore} from "../core/popupStore";
import {observer} from "mobx-react-lite";

export const Popup = observer(() => {
    return (
        <div className={"popup " + (popupStore.active ? "popup_active" : "")}>
            <div className="popup_content">
                <svg onClick={() => popupStore.active = false} className="close_button" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960"
                     width="25">
                    <path
                        d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
                </svg>
                <p className="popup_title">Какой-то текст здесь есть я не знаю насколько длинный бывает SVG код</p>
                <button className="copy">
                    <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960"
                         width="35">
                        <path
                            d="M180-81q-24 0-42-18t-18-42v-603h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560Zm0 0v-560 560Z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
})