import DOM from "../helper/helper.js";

class Nav {
    #element;

    #create() {
        this.element = DOM.create('nav')
        let linkHome = DOM.create('a');
        let linkBasket = DOM.create('a');
        DOM.attr(linkHome, 'href', 'http://127.0.0.1:5500/')
        DOM.attr(linkBasket, 'href', 'http://127.0.0.1:5500/#cart')
        DOM.html(linkHome, "Home");
        DOM.html(linkBasket, "Card");

        DOM.append(this.element, linkHome);
        DOM.append(this.element, linkBasket);
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