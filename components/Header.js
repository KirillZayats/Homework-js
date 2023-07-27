class Header {

    #element;

    constructor() {

    }

    #create() {

    }

    init() {
        console.log('header');

        this.#create();
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