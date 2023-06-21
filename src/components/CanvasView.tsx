import React, {useEffect, useMemo, useRef} from "react";
import {Canvas} from "../core/canvasService";

export function CanvasView() {
    const canvasRef = useRef(null);

    function resizeCanvas() {
        const workingField = document.querySelector('.working_field')

        if (null === workingField) {
            return;
        }

        Canvas.setSize(workingField.clientWidth, workingField.clientHeight);
    }

    useEffect(() => {
        Canvas.init(canvasRef.current);

        resizeCanvas()
    });

    window.addEventListener('resize', () => {
        resizeCanvas()
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