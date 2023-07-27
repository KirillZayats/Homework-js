import DOM from "../helper/helper.js"
import { header } from "./Header.js";
import { nav } from "./Nav.js";
import { main } from "./Main.js";
import { footer } from "./Footer.js";

class App {
    constructor() {

    }

    create() {

    }

    render() {

    }

    init() {
        DOM.search(document, 'html').setAttribute('lang', 'en');
        this.#createElementHead();

        let containerApp = DOM.create('div');
        DOM.addClass(containerApp, 'app');
        DOM.append(document.body, containerApp);
    }

    #createElementHead() {
        let title = DOM.create('title');
        DOM.html(title, 'Homework 14');
        let metaCharset = DOM.create('meta');
        DOM.attr(metaCharset, 'charset', 'UTF-8');
        let metaView = DOM.create('meta');
        DOM.attr(metaView, 'name', 'viewport');
        DOM.attr(metaView, 'content', 'width=device-width, initial-scale=1.0')
        
        let style = DOM.create('link');
        DOM.attr(style, 'rel', 'stylesheet');
        DOM.attr(style, 'href', './css/style.css');

        DOM.append(document.head, metaCharset);
        DOM.append(document.head, metaView);
        DOM.append(document.head, title);
        DOM.append(document.head, style);
    }
}
export default new App().init();