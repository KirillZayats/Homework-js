import DOM from "../helper/helper.js";

class Main {
    #element;
    #data = [];
    #create() {
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

    #createCards() {
        let listCards = DOM.create('ul');
        console.log(this.#data);
        this.#data.forEach(element => {
            let card = DOM.create('li');
            DOM.html(card, `<img src="${element.data.image}" alt="product">
                            <div class="info-product">
                                <p>${element.data.title}</p>
                                <p>${element.data.price}$</p>
                            </div>`);
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