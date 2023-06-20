import {fabric} from 'fabric';

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
}
