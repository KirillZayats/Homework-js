class Footer {

    #element;

    constructor() {

    }

    #create() {

    }

    init() {
        console.log('footer');
        this.#create();
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