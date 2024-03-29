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
        this.canvas.on('mouse:wheel', (opt) => {
            const delta = opt.e.deltaY;
            // @ts-ignore
            let zoom = this.canvas.getZoom();
            zoom *= 0.999 ** delta;
            if (zoom > 20) zoom = 20;
            if (zoom < 0.01) zoom = 0.01;
            // @ts-ignore
            this.canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
            opt.e.preventDefault();
            opt.e.stopPropagation();
        });
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

    static drawFigure(figureName: string): void {
        fabric.loadSVGFromString(figuresInfo[figureName as keyof figuresType], (figures) => {
            for (const figure of figures) {
                if(this.canvas !== null) {
                    this.canvas.add(figure);
                }
            }
        })
    }

    static drawImage(imageUrl: string) {
        fabric.Image.fromURL(imageUrl, (image) => {
            if (this.canvas !== null) {
                image.scale(0.5);
                this.canvas.add(image);
            }
        });
    }

    static drawSVG(svgUrl: string) {
        fabric.loadSVGFromURL(svgUrl, (svgList) => {
            for (const svg of svgList) {
                if(this.canvas !== null) {
                    this.canvas.add(svg);
                }
            }
        });
    }

    static addObject(element: fabric.Object) {
        this.canvas?._objects.push(element);
        this.canvas?.renderAll();
    }

    static removeLastObject(): fabric.Object | undefined {
        const removeElement = this.canvas?._objects.pop();
        this.canvas?.renderAll();
        return removeElement;
    }

    static hasObjects(): boolean {
        if (this.canvas === null) {
            return false;
        }

        return this.canvas._objects.length > 0;
    }
}
