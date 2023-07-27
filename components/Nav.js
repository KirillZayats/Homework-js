class Nav {

    #element;

    constructor() {

    }

    #create() {

    }

    init() {
        console.log('nav');
        this.#create();
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