import {makeAutoObservable} from "mobx";

class PopupStore {
    public textSvg: string = '';

    constructor() {
        makeAutoObservable(this)
    }
}

export const popupStore = new PopupStore();