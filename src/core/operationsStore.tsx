import {Canvas} from "./canvasService";
import {fabric} from "fabric";

class OperationsStore {
    removedItems = [];

    undo() {
        if (!this.hasUndo) {
            return
        }
        this.removedItems.push(Canvas.removeLastObject() as never);
    }

    redo() {
        if (!this.hasRedo) {
            return
        }
        Canvas.addObject(this.removedItems.pop() as unknown as fabric.Object);
    }

    get hasUndo(): boolean {
        return Canvas.hasObjects();
    }

    get hasRedo(): boolean {
        return this.removedItems.length > 0;
    }
}

export const operationsStore = new OperationsStore();