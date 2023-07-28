import DOM from "../helper/helper.js";

class Nav {
  #element;

  #create() {
    this.element = DOM.create("nav");
    let linkHome = DOM.create("a");
    let linkBasket = DOM.create("a");
    DOM.addClass(linkHome, "link-home");
    DOM.addClass(linkBasket, "link-basket");
    DOM.attr(linkBasket, "href", "#cart");
    DOM.html(linkHome, "Shop");
    DOM.html(
      linkBasket,
      `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="25" height="25" viewBox="0 0 256 256" xml:space="preserve">
            <defs>
            </defs>
            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                <path d="M 72.975 58.994 H 31.855 c -1.539 0 -2.897 -1.005 -3.347 -2.477 L 15.199 13.006 H 3.5 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 14.289 c 1.539 0 2.897 1.005 3.347 2.476 l 13.309 43.512 h 36.204 l 10.585 -25.191 H 45 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 41.5 c 1.172 0 2.267 0.587 2.915 1.563 s 0.766 2.212 0.312 3.293 L 76.201 56.85 C 75.655 58.149 74.384 58.994 72.975 58.994 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #fff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <circle cx="28.88" cy="74.33" r="6.16" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #fff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                <circle cx="74.59" cy="74.33" r="6.16" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #fff; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
            </g>
        </svg>`);

    DOM.append(this.element, linkHome);
    DOM.append(this.element, linkBasket);
  }

  init() {
    console.log("nav");
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
export { nav };
