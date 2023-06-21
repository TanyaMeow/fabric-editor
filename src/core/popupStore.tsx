import {makeAutoObservable} from "mobx";

class PopupStore {
    textSvg: string = '';

    constructor() {
        makeAutoObservable(this)
    }
}

export const popupStore = new PopupStore();