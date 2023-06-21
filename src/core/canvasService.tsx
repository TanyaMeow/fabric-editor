import {fabric} from 'fabric';
import {figuresInfo, figuresType} from "./figuresInfo";
import {popupStore} from "./popupStore";

export class Canvas {
    private static canvas: fabric.Canvas | null = null;

    static init(reference : any): void {
        if (this.canvas !== null) {
            return;
        }
        this.canvas = new fabric.Canvas(reference);
    }

    static setSize(width: number, height: number) {
        if (this.canvas !== null) {
            this.canvas.setHeight(height);
            this.canvas.setWidth(width);
        }
    }

    static addText() {
        if (this.canvas !== null) {
            this.canvas.add(new fabric.Textbox('Добавьте текст!'));
        }
    }

    static saveSvg() {
        if (this.canvas !== null) {
            popupStore.textSvg = this.canvas.toSVG();
        }
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
