import {fabric} from 'fabric';
import {figuresInfo, figuresType} from "./figuresInfo";

export class Canvas {
    private static canvas: fabric.Canvas | null = null;

    static init(reference : any): void {
        if (this.canvas !== null) {
            return;
        }
        this.canvas = new fabric.Canvas(reference);
    }

    static getInstance(): null | fabric.Canvas {
        return this.canvas;
    }

    static getSVG(): string {
        // @ts-ignore
        return this.canvas.toSVG();
    }

    static drawFigure(nameFigure: string): void {
        fabric.loadSVGFromString(figuresInfo[nameFigure as keyof figuresType], (figureArr) => {
            for (const figure of figureArr) {
                if(this.canvas !== null) {
                    this.canvas.add(figure);
                }
            }
        })
    }
}
