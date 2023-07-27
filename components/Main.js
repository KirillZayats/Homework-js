import DOM from "../helper/helper.js";

class Main {
    #element;

    #create() {
        this.element = DOM.create('main')
    }

    init() {
        console.log('main');
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

const main = new Main().init();
export {main};