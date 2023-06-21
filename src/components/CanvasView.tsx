import React, {useEffect, useMemo, useRef, useState} from "react";
import {Canvas} from "../core/canvasService";

export function CanvasView() {
    const canvasRef = useRef(null);

    useEffect(() => {
        Canvas.init(canvasRef.current);

        const workingField = document.querySelector('.working_field')

        if (null === workingField) {
            return;
        }

        Canvas.getInstance()?.setHeight(workingField.clientHeight);
        Canvas.getInstance()?.setWidth(workingField.clientWidth);
    });

    window.addEventListener('resize', () => {
        const workingField = document.querySelector('.working_field')

        if (null === workingField) {
            return;
        }

        Canvas.getInstance()?.setHeight(workingField.clientHeight);
        Canvas.getInstance()?.setWidth(workingField.clientWidth);
    });

    const canvasComponent = useMemo(
        () => <canvas id="canvas" className='canvas_field' ref={canvasRef}></canvas>, []
    );

    return(
        <div className="working_field">
            {canvasComponent}
        </div>
    )
}