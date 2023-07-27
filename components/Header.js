import DOM from "../helper/helper.js";
import { nav } from "./Nav.js";

class Header {
    #element;

    #create() {
        this.element = DOM.create('header')
    }

    init() {
        console.log('header');
        this.#create();
        DOM.append(this.element, nav)
        return this.element;
    }

    get element() {
        return this.#element;
    }

    set element(element) {
        this.#element = element;
    }
}

const header = new Header().init();
export {header};