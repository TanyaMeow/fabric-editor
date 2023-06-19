import React, {useState} from "react";
import {FigureContainer} from "./FigureContainer";

export function NavigationFigure() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        if(showMenu) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    }

    return(
        <div className="menu_figure">
            <a href="#" onClick={toggleMenu} id="figure" className="bar_item">
                SVG фигуры
                <svg className="open_collection" style={showMenu ? {transform: "rotate(0)"} : {transform: "rotate(-90deg)"}} xmlns="http://www.w3.org/2000/svg" height="20"
                     viewBox="0 -960 960 960"
                     width="20">
                    <path fill="#f4f4ff" d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"/>
                </svg>
            </a>
            <div className={"menu_svg " + (showMenu ? "active" : "")}>
                <FigureContainer showMenu ={showMenu}/>
            </div>
        </div>
    )
}