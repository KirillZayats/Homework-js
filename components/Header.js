import DOM from "../helper/helper.js";
import { nav } from "./Nav.js";

class Header {
    #element;

    #create() {
        this.element = DOM.create('header')
        let logo = DOM.create('div');
        DOM.addClass(logo, 'logotype');
        DOM.html(logo, "<p>ZayaKiri</p>");

        DOM.append(this.element, logo);
        DOM.append(this.element, nav)
    }

    init() {
        console.log('header');
        this.#create();
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