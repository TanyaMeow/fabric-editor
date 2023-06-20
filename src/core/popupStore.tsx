import {makeAutoObservable} from "mobx";

class PopupStore {
    public active: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }
}

export const popupStore = new PopupStore();