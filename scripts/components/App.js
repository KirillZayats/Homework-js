import DOM from "../helpers/helper.js"
import Product from "../models/Product.js";
class App {
    #data = []
    #element;
    #storage;
    #contactsStorage = '';

    #create() {
        this.#element = DOM.create('div');
        DOM.addClass(this.#element, 'app');

        this.#createSwiperElement();
        this.#crealeElementList();
        this.#createEvents();
    }

    #createSwiperElement() {
        let buttonPrev = DOM.create('button');
        let buttonNext = DOM.create('button');
        DOM.addClass(buttonPrev, "arrow");
        DOM.addClass(buttonNext, "arrow");
        DOM.addClass(buttonPrev, 'prev');
        DOM.addClass(buttonNext, 'next');

        DOM.html(buttonPrev, 'Previous')
        DOM.html(buttonNext, 'Next')

        let swiperBlock = DOM.create('div');
        DOM.addClass(swiperBlock, 'swiper');
        let listImages = DOM.create("ul");
        DOM.append(swiperBlock, listImages)

        DOM.append(this.#element, buttonPrev);
        DOM.append(this.#element, swiperBlock);
        DOM.append(this.#element, buttonNext);
    }

    #crealeElementList() {
        let listCards = DOM.search(this.#element, 'ul');
        console.log(this.#data);
        this.#data.forEach(element => {
            let card = DOM.create('li');
            DOM.html(card, `<a href=${element.data.image} target='_blank'><img src="${element.data.image}" alt="product"></a>`);
            DOM.append(listCards, card);
        });
    }

    #render() {
        DOM.append(document.body, this.#element);
    }

    #createEvents() {
        let count = (window.innerWidth == 375 || window.innerWidth == 425) ? 3 : 
                     window.innerWidth == 768 ? 4 : 5;
        let width;
        let list = DOM.search(this.#element, "ul");
        let listElems = DOM.searchAll(this.#element, "li");
        let position = 0;
        DOM.search(this.#element, ".prev").addEventListener('click', () => {
            width = DOM.search(this.#element, "img").offsetWidth + 12;
            console.log(width);
            position += width * count;
            position = Math.min(position, 0)
            list.style.marginLeft = position + 'px';
        })

        DOM.search(this.#element, ".next").addEventListener('click', () => {
            width = DOM.search(this.#element, "img").offsetWidth + 12;
            console.log(width);
            position -= width * count;
            position = Math.max(position, -width * (listElems.length - count));
            list.style.marginLeft = position + 'px';
        })
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
        DOM.html(title, 'Exam');
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