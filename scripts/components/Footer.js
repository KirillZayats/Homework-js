import DOM from "../helper/helper.js";
class Footer {
    #element;

    #create() {
        this.element = DOM.create('footer');

        let logo = DOM.create('div');
        DOM.addClass(logo, 'logotype');
        DOM.html(logo, "<p>ZayaKiri</p>");

        let containerInfo = DOM.create('div');
        DOM.addClass(containerInfo, 'container-info');
        DOM.html(containerInfo, `<p>sq. Paris Kommuny 1, Minsk 220029</p>
                              <p>+375330000000</p>
                              <p>zayakiri99@mail.com</p>`);
        DOM.append(this.element, logo);
        DOM.append(this.element, containerInfo);
    }

    init() {
        console.log('footer');
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

const footer = new Footer().init();
export {footer};