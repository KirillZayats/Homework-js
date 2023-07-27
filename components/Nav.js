import DOM from "../helper/helper.js";

class Nav {
    #element;

    #create() {
        this.element = DOM.create('nav')
    }

    init() {
        console.log('nav');
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

const nav = new Nav().init();
export {nav};