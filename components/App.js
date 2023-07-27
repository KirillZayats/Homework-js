import DOM from "../helper/helper.js"
import { header } from "./Header.js";
import { main } from "./Main.js";
import { footer }  from "./Footer.js";
import Product from "../models/Product.js";
console.log(header);
class App {
    #data = []
    #element;
    #storage;
    #contactsStorage = '';

    #create() {
        this.#element = DOM.create('div');
        DOM.addClass(this.#element, 'app');
    }

    #render() {
        DOM.append(document.body, this.#element);
        DOM.append(this.#element, header);
        DOM.append(this.#element, main(this.#data));
        DOM.append(this.#element, footer);

    }

    async init() {
        console.log();
        this.#clearStorageExpired();
        this.#contactsStorage = JSON.parse(localStorage.getItem('products'));
        if (this.#contactsStorage !== null && this.#contactsStorage.length !== 0) {
            this.data = this.#contactsStorage;
        } else {
            await this.#getData()             
        }

        await DOM.search(document, 'html').setAttribute('lang', 'en');
        await this.#createElementHead();
        await this.#create();
        await this.#render();
    }

    async #getData() {
        const response = await fetch(`https://fakestoreapi.com/products`);
        if(response.ok) {
            const json = await response.json();
            this.data = await json;
            this.storage = await this.data;
        }       
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

    add(product) {
        (product instanceof Product) ? this.#data.push(product) : alert('You want add object, that dont instance of Product');;
    }

    get data() {
        return this.#data;
    }

    set data(data) {
        data.forEach(element => {
            let product = new Product(element);
            this.add(product);
        });
    }

    #clearStorageExpired() {
        this.#getCookie('storageExpiration') == undefined && localStorage.clear()
    }

    //получение куки
    #getCookie(name) {
        let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    #clearStorage() {
        localStorage.clear();
    }

    get storage() {
        return this.#storage;
    }

    set storage(value) {
        let dateSave = new Date();
        dateSave.setHours(dateSave.getHours() + 240);
        document.cookie = `storageExpiration = 10 days; expires=${dateSave.toUTCString()}`;
        window.localStorage.setItem('products', JSON.stringify(value));
    }
}

export default new App().init();