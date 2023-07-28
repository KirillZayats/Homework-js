import DOM from "../helper/helper.js";

class Main {
  #element;
  #data = [];
  #statusBlock = 0;
  #create() {
    let card = DOM.search(document.body, ".link-basket");
    console.log(card);

    this.element = DOM.create("main");
    let title = DOM.create("h1");
    DOM.html(title, "Products");
    DOM.append(this.element, title);
    this.#createCards();
  }

  init(data) {
    console.log("main");
    this.#data = data;
    this.#create();
    return this.element;
  }

  #initEvents() {}

  #createCards() {
    let listCards = DOM.create("ul");
    console.log(this.#data);
    this.#data.forEach((element) => {
      let card = DOM.create("li");
      DOM.html(
        card,
        `<img class="image-product" src="${element.data.image}" alt="product">
                            <div class="info-product">
                                <p class="title-product">${element.data.title}</p>
                                <p class="price-product">$${element.data.price}</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="25" height="25" viewBox="0 0 256 256" xml:space="preserve">
                                <defs>
                                </defs>
                                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                                    <path d="M 72.975 58.994 H 31.855 c -1.539 0 -2.897 -1.005 -3.347 -2.477 L 15.199 13.006 H 3.5 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 14.289 c 1.539 0 2.897 1.005 3.347 2.476 l 13.309 43.512 h 36.204 l 10.585 -25.191 H 45 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 41.5 c 1.172 0 2.267 0.587 2.915 1.563 s 0.766 2.212 0.312 3.293 L 76.201 56.85 C 75.655 58.149 74.384 58.994 72.975 58.994 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #000; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                    <circle cx="28.88" cy="74.33" r="6.16" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #000; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                                    <circle cx="74.59" cy="74.33" r="6.16" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #000; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                                </g>
                            </svg>`);
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
