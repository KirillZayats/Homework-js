import DOM from "../helper/helper.js";

class Main {
    #element;
    #data = [];
    #statusBlock = 0;
    #create() {

        let card = DOM.search(document.body, '.link-basket');
        console.log(card);

        this.element = DOM.create('main');
        let title = DOM.create('h1');
        DOM.html(title, 'Products');
        DOM.append(this.element, title)
        this.#createCards();
    }

    init(data) {
        console.log('main');
        this.#data = data;
        this.#create();
        return this.element;
    }

    #initEvents() {
        
    }

    #createCards() {
        let listCards = DOM.create('ul');
        console.log(this.#data);
        this.#data.forEach(element => {
            let card = DOM.create('li');
            DOM.html(card, `<img class="image-product" src="${element.data.image}" alt="product">
                            <div class="info-product">
                                <p class="title-product">${element.data.title}</p>
                                <p class="price-product">$${element.data.price}</p>
                            </div>
                            <img class="icon-basket" src="../components/images/basket-black.svg" alt="shopping-basket">`);
            DOM.append(listCards, card);
        });
        DOM.append(this.#element, listCards);
    }

    get element() {
        return this.#element;
    }

    set element(element) {
        this.#element = element;
    }
}


export function main(data) {
    return new Main().init(data);
}