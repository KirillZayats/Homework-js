import Cart from "./Cart.js";
import Product from "./Product.js"

class Shop {
    #data = [];
    cart = new Cart();

    constructor (data) {
        this.#data = data;
    }

    getById = (id) => {
        return this.#data.find(elem => elem.id == id);
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
}

export default Shop;