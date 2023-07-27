import DOM from "../helper/helper.js";
class Footer {
    #element;

    #create() {
        this.element = DOM.create('footer')
    }

    init() {
        console.log('footer');
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

const footer = new Footer().init();
export {footer};