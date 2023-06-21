import {action, computed, makeObservable, observable} from "mobx";
import {Canvas} from "./canvasService";
import {fabric} from "fabric";

class OperationsStore {
    removedItems = [];

    constructor() {
        makeObservable(this, {
                removedItems: observable,
                undo: action,
                redo: action,
                hasUndo: computed,
                hasRedo: computed,
            }
        );
    }

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

    get hasRedo() {
        return this.removedItems.length > 0;
    }
}

export const operationsStore = new OperationsStore();