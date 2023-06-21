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

        Canvas.setSize(workingField.clientWidth, workingField.clientHeight);
    });

    window.addEventListener('resize', () => {
        const workingField = document.querySelector('.working_field')

        if (null === workingField) {
            return;
        }

        Canvas.setSize(workingField.clientWidth, workingField.clientHeight);
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