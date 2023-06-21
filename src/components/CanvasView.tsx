import React, {useEffect, useMemo, useRef} from "react";
import {Canvas} from "../core/canvasService";

export function CanvasView() {
    const canvasRef = useRef(null);
    useEffect(() => {
        Canvas.init(canvasRef.current);
    });
    const canvasComponent = useMemo(() => <canvas id="canvas" className='canvas_field' ref={canvasRef} ></canvas>, []);

    return(
        <div className="working_field">
            {canvasComponent}
        </div>
    )
}