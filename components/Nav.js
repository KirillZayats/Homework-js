import DOM from "../helper/helper.js";

class Nav {
    #element;

    #create() {
        this.element = DOM.create('nav')
        let linkHome = DOM.create('a');
        let linkBasket = DOM.create('a');
        DOM.addClass(linkHome, 'link-home')
        DOM.addClass(linkBasket, 'link-basket')
        DOM.attr(linkBasket, 'href', '#cart')
        DOM.html(linkHome, "Shop");
        DOM.html(linkBasket, `<img class="icon-basket"
                              src="../components/images/basket-white.svg" 
                              alt="shopping-basket"/>`);
    
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