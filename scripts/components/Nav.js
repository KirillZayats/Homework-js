import DOM from "../helper/helper.js";

class Nav {
  #element;

  #create() {
    this.element = DOM.create("nav");
    let linkHome = DOM.create("a");
    DOM.addClass(linkHome, "link-home");
    DOM.html(linkHome, "Shop");
    DOM.attr(linkHome, 'href', '#')

    DOM.append(this.element, linkHome);
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
