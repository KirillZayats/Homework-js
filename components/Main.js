class Main {

    #element;

    constructor() {

    }

    #create() {

    }

    init() {
        console.log('main');

        this.#create();
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