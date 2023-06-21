import React from "react";

export function NavigationImage({onAdd}: any) {
    return (
        <label className="label_add-image">
            <a onClick={onAdd} href="#" className="bar_item">Изображение
                    <svg className="button_add" xmlns="http://www.w3.org/2000/svg" height="25"
                         viewBox="0 -960 960 960" width="25">
                        <path fill="rgba(230, 230, 255, 0.8)"
                              d="M453-280h60v-166h167v-60H513v-174h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/>
                    </svg>
                    <input style={{display: 'none'}} accept=".jpg, .png" type="file" id="file_button"></input>
            </a>
        </label>
    )
}